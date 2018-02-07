/*
 ** 处理顶部导航的action
 ** @param state{object} 状态
 ** @param action(string) action事件
 */
import cloneDeep from 'lodash/cloneDeep'
import navData from './../modules/TestData'
var navListData = navData.getNewsClass.result;
// 引入_regeneratorRuntime是为了兼容redux-api-middleware
const _regeneratorRuntime = require('babel-runtime/regenerator');
if (!_regeneratorRuntime.default) {
	_regeneratorRuntime.default = _regeneratorRuntime;
}

// 为导航加入首页
if (+navListData[0].bclass.bclassid !== 0) {
	navListData.map((item)=>{
		item.bclass.active = false;
	})
	navListData.unshift({
		"bclass": {
			"active":true,
			"bclassname": "首页",
			"bclassid": "0",
			"bclasspath": "home",
			"arr": [

			],
			"tbname": ""
		},
	})
}
const header = (state,action)=>{

}
const reducer = (state = navListData, action) => {
	console.log(action)
	switch (action.type) {
		case "HEADER_HOVER":
			// 导航hover
			const id = action.id;
			const newState = cloneDeep(state);
			newState.map((item)=>{
				if (item.bclass.bclassid === id) {
					item.bclass.active = true;
				}else{
					item.bclass.active = false;
				}
				return item;
			})
			console.log(newState)
			return newState;
		default:
			return state;
	}
}

export default reducer;