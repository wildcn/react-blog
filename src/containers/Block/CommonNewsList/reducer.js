import {
  fromJS
} from 'immutable'
import {
  CommonNewsListOnClick,
  CommonNewsListRender,
  PhotosChange,
  CommonNewsNext
} from './action'
import {
  Categories,
} from './../../../modules/datas'
import Apis from '../../../modules/Apis'
import options from './../../../modules/option'
import variable from './option';
const showNumber = variable.limit; // 默认显示的文章数量
const initialState = fromJS({
  curPond: [],
  pageIndex: 1,
  categories: [],
});

// 拿栏目数据
function resetList(list) {
  var result = {},
    categoriesPath = {};
  var categoriesInfo = {};
  Categories.map((item, index) => {
    categoriesInfo[item.id] = item;
  });
  console.log(categoriesInfo)
  list.map((item, index) => {

    var newGategories = {
      id: item.categories[0],
      name: categoriesInfo[item.categories[0]] && categoriesInfo[item.categories[0]].name,
      active: false
    }
    item.url = `detail/${item.id}`;
    item.categories = newGategories;
    if (!categoriesPath[newGategories.id]) {
      categoriesPath[newGategories.id] = newGategories;
    }
    // 相册增加状态
    if (item.format === 'image') {
      item.css = 'translate3d(0px,0px,0px)';
      item.index = 0;
    }
    if (item.format === 'aside' && item.author) {
      fetch(Apis.getUserInfo + item.author).then(res => res.json()).then(data => {
        item.userInfo = data;
      })
    }
    return item;
  });
  // 为栏目增加所有
  categoriesPath[0] = {
    id: 0,
    name: '所有',
    active: true,
  }
  console.log(categoriesPath)
  var categoriesName = [];
  for (var i in categoriesPath) {
    categoriesName.push(categoriesPath[i]);
  }
  return {
    cate: categoriesName,
    data: list
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CommonNewsListRender + '_SUCCESS':
      // 新闻列表抓取成功
      const newsList = action.payload,
        categoriesPath = {}
        // 将栏目名称放入数据中
      var list = resetList(action.payload)
      return fromJS({
        curPond: list.data,
        categories: list.cate,
        pageIndex: 1
      })
    case CommonNewsListOnClick:
      console.log(`News CommonNewsListOnClick click`)
      return state;
    case PhotosChange:
      // 瀑布流相册图片切换
      var index = --action.payload.index,
        direction = action.payload.direction || 0,
        cur = state.toJS().curPond[index],
        imgsLength = cur.media_all.length - 1,
        width = options.layout.primary.listflow.liWidth;
      var toIndex;
      // 设定目标图片 两边则循环
      if (direction === 'left') {
        toIndex = cur.index <= 0 ? imgsLength : --cur.index;
      } else if (direction === 'right') {
        toIndex = cur.index >= imgsLength ? 0 : ++cur.index;
      } else {
        toIndex = action.payload.pointindex;
      }
      cur.css = `translate3d(-${toIndex*width}px,0px,0px)`;
      cur.index = toIndex;
      return state.setIn(['curPond', index], fromJS(cur));
      // 翻页请求
    case CommonNewsNext + '_SUCCESS':
      var list = resetList(action.payload),
        newState = state.toJS();

      return state
        .set('curPond', fromJS(newState.curPond.concat(list.data)))
        .set('categories', fromJS(list.cate))
        .set('pageIndex', newState.pageIndex + 1)
    default:
      return state;
  }
}
export default reducer;