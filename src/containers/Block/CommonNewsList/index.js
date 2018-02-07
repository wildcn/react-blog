import React from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';

import variable from './option';
import * as actions from './action';
import ListFlow from './../../../components/ListFlow';
import styled from 'styled-components';
import './../../../styles/component/listflow.scss'
import options from './../../../modules/option';
const {
  offsetWidth
} = document.body;
const {
  main,
  content,
  extra,
  chief
} = offsetWidth > 1200 ? options.layout.primary : options.layout.smaller;
const LayoutColumn = {
  width:content,
  margin: '20px auto',
  overflow: 'hidden'
}

class CommonNewsListWrapper extends React.Component { // eslint-disable-line
  componentWillUpdate(nextProps, nextState) {
    this.requestNextStatus = true;
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(`componentDidUpdate`)
    this.requestNextStatus = false;
  }
  componentWillMount() {
    var id = this.props.config.classid,
      param = {per_page:variable.limit};
    if (id !== 0 ) {
      param['categories'] = +id;
    }
    this.props.GetCommonNewsList(param)
  }
  componentDidMount() {
    // console.log('componentDidMount')
    let that = this,
      screenHeight = document.documentElement.clientHeight;
    window.addEventListener('scroll', (event) => {
      let docH = document.body.scrollHeight, //滚动条自身高度
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      var limitPos = that.addMore &&that.addMore.offsetTop - 350 || 0;
      if (scrollTop > limitPos && !that.requestNextStatus) {
        that.props.renderNext({pageIndex:that.props.pageIndex+1,classid:this.props.config.classid});
        that.requestNextStatus = true;
      }
      var scrollToTop = document.querySelector('.scroll_top'),
          scrollClass = scrollToTop.className;
      if (scrollTop > screenHeight) {
        scrollToTop.className += !/db/.test(scrollClass)?' db':'';
      }else{
        scrollToTop.className = scrollClass.replace(/\s*db/,'');
      }

    }, false)
  }
  render() {
    const {
      categories
    } = this.props;
    var classid = this.props.config.classid || 0;
    // console.log(categories)
    const needRender = this.props.curPond;
    const addMore = (<a className="common_news_more" ref={(node) => this.addMore = node} data-page={this.props.pageIndex} href="javascript:;" onClick={this.props.renderNext.bind(this,{pageIndex:this.props.pageIndex+1,id:classid})}>加载更多</a>);
    return (
      <div  style={LayoutColumn}  className="common_news_list" >
        <div className="nav">
          <i className="nav-catelog">分类目录：</i>
          {categories.map((item,index)=>(<a key={item.id} className={item.active?'active':''} href="javascript:;" data-id={item.id} onClick={this.categoryClick.bind(this)}>{item.name}</a>))}
        </div>
        <div className="content">
        <ListFlow param={this.props} />
          {addMore}
        </div>
      </div>
    );
  }

  handleClick() {
    this.props.OnClickAction();
  }
  categoryClick() {
    this.props.categoryClick();
  }
}

function mapStateToProps(state) {
  const stateJS = state.toJS();
  var result = {};
  // 将state中各模块的数据中取出合并
  for (var i in stateJS) {
    for (var j in stateJS[i]) {
      result[j] = stateJS[i][j]
    }
  }
  return (result);
}


function mapDispatchToProps(dispatch) {
  // 抓取第一批数据
  // console.log(this.props)
  // dispatch(actions.GetCommonNewsList({
  //   per_page:variable.limit
  // }));

  return bindActionCreators({...actions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonNewsListWrapper);