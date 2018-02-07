/*
 ** 处理顶部导航的action
 ** @param state{object} 状态
 ** @param action(string) action事件
 */
import {
    fromJS
} from 'immutable'
import navData from './../../modules/navbar'
import { Categories } from './../../modules/datas'
import {
    NAV_HOVER,
    NAV_MOUSEOUT,
    SEARCH_SHOW,
    GET_FRIEND_LINK,
} from './action'
import options from './../../modules/option';
import {
    combineReducers
} from 'redux'
const {
    offsetWidth
} = document.body;
const layout = offsetWidth > 1200 ? options.layout.primary : options.layout.smaller;
var navListData = Categories;
// 处理导航数据
var processNav = {};
navListData.sort((a,b)=>a.parent-b.parent);
console.log(navListData);
navListData.map((item) => {
    item.active = false;
    if (item.parent === 0) {
        processNav[item.id] = item;
    }else{
        processNav[item.parent].sonclass = processNav[item.parent].sonclass || [];
        processNav[item.parent].sonclass.push(item);
    }
    return item;
});
var finalNav = [];

for(var i in processNav){
    finalNav.push(processNav[i]);
}
if (+finalNav[0].bclassid !== 0) {
    finalNav.unshift({
        id: 0,
        link: "http://www.fashionwhale.com",
        name: "首页",
        slug: "home",
        parent: 0,
        active: true,
    })
}
const initState = fromJS({
    nav: finalNav,
    secondery:false,
    searchStatus:false,
    domain: 'http://www.subui.com',
    layout: layout,
    friendlink: [],
});

function globalReducer(state = initState, action) {
    switch (action.type) {
        case GET_FRIEND_LINK + '_SUCCESS':
            // 友情链接
            return state.set('friendlink', action.payload.result[0]);
        case NAV_HOVER:
        var newNav = state.toJS().nav,
            id = +action.payload.id,
            curItem;
            console.log(id)
            console.log(newNav)
           newNav.map((item)=>{
            if (item.id === id) {
                item.active = true;
                curItem = item;
            }else{
                item.active = false;
            }
           }) 
            return state.set('nav',fromJS(newNav)).set('secondery',curItem.sonclass?true:false);
        case NAV_MOUSEOUT:
            return state.set('secondery',false);
        case SEARCH_SHOW:
            var status = state.toJS().searchStatus;
            return state.set('searchStatus',!status);
        default:
            return state;
    }
}


export default globalReducer;