import CallApi from '../../../utils/CallApi';
import Apis from '../../../modules/Apis'
import variable from './option';


export const CommonNewsListOnClick = 'block/CommonNewsListOnClick'
export const CommonNewsListRender = 'block/CommonNewsListRender'
export const CategoryClick = 'block/CategoryClick'
export const PhotosChange = 'block/CommonList/PhotosChange'
export const CommonNewsNext = 'block/CommonList/CommonNewsNext'
export const CommonNewsRequestNext = 'block/CommonList/CommonNewsRequestNext'

const getCommonNewsList = Apis.getCommonNewsList;

export function OnClickAction() {
	return {
		type: CommonNewsListOnClick,
		payload:{a:1}
	}
}
export function categoryClick(e){
	return {
		type: CategoryClick,
		payload:e
	}
}
export function photoChange(event){
	event = event.nativeEvent;
	event.stopImmediatePropagation()
	return {
		type:PhotosChange,
		payload:{
			direction:event.target.dataset.direction,
			index:event.target.dataset.index,
			pointindex:event.target.dataset.pointindex,
		}
	}
}
export function renderNext({pageIndex,classid}){
	var param = {
			per_page:variable.limit,
			page:pageIndex
		};
	if (classid !== 0) {
		param['categories'] = classid || 0;
	}
	var api = Apis.getCommonNewsList;
	return CallApi({
		api: api,
		param:param,
		action: CommonNewsNext,
	});
}

export function GetCommonNewsList(param = {}) {
	var api = Apis.getCommonNewsList;
	for (var i in param) {
		api += `&${i}=${param[i]}`;

	}
	return CallApi({
		api: api,
		action: CommonNewsListRender,
	});
}
