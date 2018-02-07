// 定义顶部导航交互的action


import CallApi from '../../utils/CallApi';
import Apis from '../../modules/Apis'
export const GET_NEWS_CONTENT = 'article/GET_NEWS_CONTENT';

export function getNewsContent(param) {
	var api = `${Apis.getNewsContent}${param.id}?`;
	for(var i in param){
		api += `${i}=${param[i]}&`;
	}
	const result = CallApi({
		api: api,
		action: GET_NEWS_CONTENT,
	});
	return result;
}