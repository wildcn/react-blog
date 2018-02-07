/*
 ** 抓整站导航数据
 ** 杜连强
 ** 2017年07月27日19:15:48
 */
import React from 'react';
import NavLink from './../../utils/NavLink'
import './../../styles/component/navbar.scss';

class TopNavList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }
  primaryList() {
    // 栏目地址规则 /news/生活
    const {
      nav
    } = this.props.param;
    return (
      nav.map(item => {
        const path = item.slug === 'home' ? '/' : `/category/${item.id}`;
        return (
          <li id={item.id} ref={navOn=>(this.navOn = navOn)}  key={`key_${item.slug}`} onMouseOver={this.handleMouseOver.bind(this,item.id)}  onMouseOut={this.handleMouseOut.bind(this)}>
            <NavLink className={`${item.active?'active':''}`} onlyActiveOnIndex={true}  key={`key_${item.slug}`} name={item.name}  to={path}>
            {item.name}
            </NavLink>
            </li>
        )
      })
    )
  };
  handleMouseOver(id) {
    this.hoverStatus = true;
    this.props.param.onMouseOverAction(id);
  }
  handleMouseOut() {
    var timer = setTimeout(() => {
      if (!this.hoverStatus) {
        this.props.param.NavOnMouseOut();
      } else {
        clearTimeout(timer);
        this.handleMouseOut();
      }
    }, 300)
  }
  handleSeconderyMouseOver() {
    this.hoverStatus = true;
  }
  handleSeconderyMouseOut() {
    this.hoverStatus = false;
  }
  sencondaryList() {
    let sencondaryPond = [];
    const {
      nav
    } = this.props.param;
    nav.map((item) => {
      let thirdPond = [];

      item.sonclass && item.sonclass.map((sonItem) => {
         var path = sonItem.slug === 'home' ? '/' : `/category/${item.id}/${sonItem.id}`;
        sonItem.slug = sonItem.slug.toUpperCase();
        thirdPond.push(<li key={`key_${sonItem.slug}`}>
          <NavLink key={`key_${sonItem.slug}`} name={sonItem.name}  to={path}>
          <i className="path">{sonItem.slug}</i>{sonItem.name}
          </NavLink>
          </li>)
        return sonItem;
      })
      sencondaryPond.push(<ul className={item.active?'db':''} key={`key_${item.slug}`} id={`sencondaryUl_${item.id}`}>{thirdPond}</ul>)
      thirdPond = [];
      return item;
    })
    return sencondaryPond;
  };
  render() {
    const {
      main
    } = this.props.param.layout,
      styles = {
        width: main
      };
    return (<div id="nav">
      <div className="primary">
        <ul>
            {this.primaryList()}
        </ul>
      </div>
      <div onMouseOver={this.handleSeconderyMouseOver.bind(this)} onMouseOut={this.handleSeconderyMouseOut.bind(this)} className={`sencondary ${this.props.param.secondery?'db':""}`}>
        {this.sencondaryList()}
      </div>
      <div className={`search flex ${this.props.param.searchStatus?'search_show':''}`}>
        <input type="text" className="flex1" placeholder="技术栈" />
        <button className="search-submit iconfont icon_search"></button>
        
      </div>
      <a href="javascript:;" onClick={this.props.param.searchShow.bind(this)} className="search-open iconfont icon_search"></a>

          {this.props.children}
    </div>)
  }
}
export default TopNavList;