import {
	fromJS,
} from 'immutable'
import {
	GET_NEWS_CONTENT
} from './action'
import Apis from '../../modules/Apis'

const initialState = fromJS({
	content:{}
});
// 处理正文文章
function resetContent(data={}){
	// 增加作者信息
	if (data.author) {
		fetch(Apis.getUserInfo+data.author).then(res=>res.json()).then((data)=>{
			data.userInfo = data;
		})
	}
	// 增加标签信息
	if (data.tags && data.tags.length) {
		var tags = [];
		data.tags.map((item)=>{
			fetch(Apis.getTagInfo+item).then(res=>res.json()).then((data)=>tags.push(data));
		})
		data.tagInfo = tags;
	}
	// 处理时间
	data.date = data.date.replace(/T/,' ');
	// 处理简介
	if (data.excerpt && data.excerpt.rendered) {
		data.excerpt.rendered = data.excerpt.rendered.replace(/<br\s\/>/g,'</p><p>')
	}
	
	// 处理文章内容
	var c = data.content.rendered;
	// 删除gallery内容 通过media_all 字段来实现
	if (data.format === 'image') {
		// css隐藏
	}
	// 删除空行
	c = c.replace(/<p>&nbsp;<\/p>/ig,'');
	// 替换换行符
	c = c.replace(/<br\s\/>/g,'</p><p>');

	data.content.rendered = c;
	return fromJS(data);
}
function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_NEWS_CONTENT+'_SUCCESS':
		console.log(`文章详情`)
		return state.set('content',resetContent(action.payload));
		default:
			return state;
	}
}
export default reducer;