// 定义顶部导航交互的action

import {
	CALL_API
} from 'redux-api-middleware'
import CallApi from '../../utils/CallApi';
import Apis from '../../modules/Apis'

export const STICKY_CHANGE = 'block/STICKY_CHANGE'
export const GET_HEADLINE = 'block/GET_HEADLINE'
export const HEADLINE_SLIDE = 'block/HEADLINE_SLIDE'
export const GET_LAST_LIST = 'block/GET_LAST_LIST'
export const GET_HOTLIST = 'block/GET_HOTLIST'
export const GET_ONCLICK_LIST = 'block/GET_ONCLICK_LIST'
export const GET_PIC_WALL = 'block/GET_PIC_WALL'
export const UPLOAD_PIC_WALL = 'block/UPLOAD_PIC_WALL'
export function StickyChange(param) {
	return {
		type: STICKY_CHANGE,
		payload: param
	}
}
export function LastList() {
	return function(dispatch) {
		// 最近更新
		dispatch(GetLastList({
			length: 40
		}));
	}
}
export function GetHeadline(param) {
	var api = Apis.getHeadLine;
	for (var i in param) {
		api += `&${i}=${param[i]}`;
	}
	return CallApi({
		api: api,
		action: GET_HEADLINE,
	});
}
export function slideAuto(index) {
	return {
		type: HEADLINE_SLIDE,
	}
}

export function uploadImgSize(args) {
	return {
		type: UPLOAD_PIC_WALL,
		payload: args
	}
}
export function GetNewsList(param) {
	var api = Apis.getNewsList;
	for (var i in param) {
		api += `&${i}=${param[i]}`;
	}
	switch (param.actionType) {
		default: return CallApi({
			api: api,
			action: GET_LAST_LIST,
		});
		case 'hot':
				return CallApi({
				api: api,
				action: GET_HOTLIST,
			});
		case 'onclick':
				return CallApi({
				api: api,
				action: GET_ONCLICK_LIST,
			});
	}

}
export function GetLastList(param) {
	var api = Apis.getLastList;
	for (var i in param) {
		api += `&${i}=${param[i]}`;

	}
	return CallApi({
		api: api,
		action: GET_LAST_LIST,
	});
}
export function GetPicList(param) {
	var api = Apis.getPicList;
	for (var i in param) {
		api += `&${i}=${param[i]}`;

	}
	return CallApi({
		api: api,
		action: GET_PIC_WALL,
	});
}