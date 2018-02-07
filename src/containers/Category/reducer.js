/*
 ** 处理顶部导航的action
 ** @param state{object} 状态
 ** @param action(string) action事件
 */
import {fromJS} from 'immutable'
import {HEADLINE_ONCLICK,GET_HEADLINE} from './action'

const initialState = fromJS({
  news:[]
});


function reducer(state=initialState ,action){
	switch (action.type) {
		case HEADLINE_ONCLICK:
			console.log(`News HEADLINE_ONCLICK`)
			return state
		case GET_HEADLINE:
			console.log('抓数据')
			return state;
		default:
			return state;
	}
}
export default reducer;