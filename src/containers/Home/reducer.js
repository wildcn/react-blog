/*
 ** 处理顶部导航的action
 ** @param state{object} 状态
 ** @param action(string) action事件
 */
import {
	fromJS,
} from 'immutable'
import {
	STICKY_CHANGE,
	GET_HEADLINE,
	HEADLINE_SLIDE,
	GET_LAST_LIST,
	GET_HOTLIST,
	GET_ONCLICK_LIST,
	UPLOAD_PIC_WALL,
	GET_PIC_WALL
} from './action'

import {
	combineReducers
} from 'redux'
import cloneDeep from 'lodash/cloneDeep'
import options from './../../modules/option'
import {
	sticky
} from './../../modules/datas'
const domain = 'http://www.subui.com';

const checkImg = (imgurl) => {
	if (!imgurl) {
		return false
	}
	return (new RegExp(domain)).test(imgurl) ? imgurl : `${domain}${imgurl}`
}
const checkSrc = (item) => {
	if (options.staticUrl) {
		return (new RegExp(domain)).test(item.titleurl) ? item.titleurl : `${domain}${item.titleurl}`
	} else {
		return `/${item.classpath}/${item.classid}/${item.id}`;
	}
};
// 处理置顶文章数据
const renderSticky = (data) => {
	if (!data || !data.length) {
		return data;
	}
	const bond = {
		result: [],
		interval: 4000,
		width: 1000,
		currentIndex: 0,
		transform: 'translate3d(0px,0px,0px)',
		number: 0,
	};
	data.map(function(item, index) {
		if (item.better_featured_image) {
			var sizes = item.better_featured_image.media_details.sizes || {},
				imgUrl = sizes.medium_large ? sizes.medium_large.source_url : item.better_featured_image.source_url;
			bond.result.push({
				src: item.link,
				imgUrl: imgUrl,
				url:`detail/${item.id}`,
				desc: item.excerpt.rendered.replace(/^<[^>]+>/, '').replace(/<[^>]+>[\s]*$/, ''),
				title: item.title.rendered,
				active: bond.number === 0 ? true : false,
			});
			bond.number++;
		}
		return item;
	});
	return fromJS(bond);
}

function stickyReducer(state = renderSticky(sticky), action) {
	switch (action.type) {
		case GET_HEADLINE + '_SUCCESS':
			// 幻灯图抓取成功
			return renderSticky(action.payload);
		case STICKY_CHANGE:
			// 幻灯图点击切换
			const sticky = state.toJS();
			var change, index;
			var curIndex = sticky.currentIndex;
			change = action.payload.direction;
			index = ++action.payload.index;
			// 点击当前 返回
			if (index) {
				--index;
				if (curIndex === index) {
					return state;
				}
				return state
					.set('currentIndex', index)
					.set('transform', `translate3d(-${index*sticky.width}px,0px,0px)`);
			}

			// 点击左右
			console.log(change)
			if (change === 'left') {
				index = curIndex === 0 ? (sticky.result.length - 1) : --curIndex;
			} else if (change === 'right') {
				index = curIndex === sticky.result.length - 1 ? 0 : ++curIndex;
			}
			return state
				.set('currentIndex', index)
				.set('transform', `translate3d(-${index*sticky.width}px,0px,0px)`);

		case HEADLINE_SLIDE:
			// 处理幻灯图的自动播放
			var newS = state.toJS().headline,
				imgCount = newS.slideLength,
				curIndex = newS.currentIndex;
			let nextIndex = (curIndex + 1) >= imgCount ? 0 : curIndex + 1;
			return state.set('currentIndex', nextIndex);
		default:
			return state;
	}
}

function onclicklistReducer(state = fromJS([]), action) {
	switch (action.type) {
		case GET_ONCLICK_LIST + '_SUCCESS':
			// 点击排行
			let onclickResult = action.payload.data,
				onclickList = [];
			if (!onclickResult.length) {
				return state
			};
			onclickResult.map((item, index) => {
				onclickList.push({
					title: item.title,
					classid: item.classid,
					id: item.id,
					src: checkSrc(item),
					imgUrl: checkImg(item.titlepic),
					desc: item.smalltext,
					sort: true
				})
			})
			return fromJS(onclickList);
		default:
			return state;
	}
}

function hotlistReducer(state = fromJS([]), action) {
	switch (action.type) {
		case GET_HOTLIST + '_SUCCESS':
			// 今日要闻
			console.log(action.payload)
			let hotResult = action.payload.data,
				hotlist = [];
			if (!hotResult.length) {
				return state
			};
			hotResult.map((item, index) => {
				hotlist.push({
					title: item.title,
					classid: item.classid,
					id: item.id,
					src: checkSrc(item),
					imgUrl: checkImg(item.titlepic),
					desc: item.smalltext
				})
			})
			return fromJS(hotlist);
		default:
			return state;
	}
}

function newslistReducer(state = fromJS([]), action) {
	switch (action.type) {
		case GET_LAST_LIST + '_SUCCESS':
			console.log(action)
			let newsResult = action.payload.data,
				newslist = [];
			if (newsResult && !newsResult.length) {
				return state
			};
			newsResult.map((item, index) => {
				newslist.push({
					title: item.title,
					classid: item.classid,
					id: item.id,
					src: checkSrc(item),
					imgUrl: checkImg(item.titlepic),
				})
			})
			return fromJS(newslist);
		default:
			return state;
	}
}


function picWallReducer(state = fromJS([]), action) {
	switch (action.type) {
		case GET_PIC_WALL + '_SUCCESS':
			// 图片墙
			let picResult = action.payload.data,
				picwall = [];
			if (!picResult.length) {
				return state
			};
			picResult.map((item, index) => {
				picwall.push({
					title: item.title,
					classid: item.classid,
					id: item.id,
					src: checkSrc(item),
					imgUrl: checkImg(item.titlepic),
					desc: item.smalltext,
					styles: {},
				})
			})
			return fromJS(picwall);
		case UPLOAD_PIC_WALL:
			// 更新图片墙
			return state.setIn([+action.payload.index, 'styles'], action.payload.styles);
		default:
			return state;
	}
}
export default combineReducers({
	picwall: picWallReducer,
	newslist: newslistReducer,
	onclicklist: onclicklistReducer,
	hotlist: hotlistReducer,
	sticky: stickyReducer
});