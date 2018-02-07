// 定义顶部导航交互的action
import {
	CALL_API
} from 'redux-api-middleware'
import Apis from './../../modules/Apis'

import CallApi from '../../utils/CallApi';
export const GET_FRIEND_LINK = 'block/GET_FRIEND_LINK'
export const NAV_HOVER = 'nav/NAV_HOVER'
export const NAV_MOUSEOUT = 'nav/NAV_MOUSEOUT'
export const SEARCH_SHOW = 'nav/SEARCH_SHOW'


export function onMouseOverAction(id) {
	return {
		type: NAV_HOVER,
		payload: {
			id:id
		}
	}
}
export function searchShow(){
	return {
		type:SEARCH_SHOW
	}
}
export function NavOnMouseOut(id) {
	return {
		type: NAV_MOUSEOUT,
	}
}
export function GetFriendLink() {
	return CallApi({
		api: Apis.getFriendLink,
		action: GET_FRIEND_LINK,
	});
}