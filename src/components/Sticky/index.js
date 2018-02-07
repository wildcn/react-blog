/*
** 轮播图效果
*/
import React from 'react';
import styled from 'styled-components';
import './../../styles/component/sticky.scss'

class Sticky extends React.Component{
	constructor(props) {
		super(props);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.stickyChange = this.stickyChange.bind(this);
	}
	componentDidMount(){
		this.resetSlider();
	}
	resetSlider(){
		// 重置组件状态
		// 至少2张图片，才能启动轮播
    	// this.tryStartAuto();
	}
	render(){
		var sticky = this.props.param.sticky.toJS();
		var currentIndex = sticky.currentIndex || 0;
		this.currentIndex = currentIndex;
		var imgs = sticky.result;
		// 定义相关参数
		var ulStyle = {
			width:`${sticky.width*imgs.length}px`,
			transform:sticky.transform,
			'-webkit-transform':sticky.transform,
		};
		var liStyle = {
			width:`${sticky.width}px`,
		}
		// 生成图片池
		var imgsBond = imgs.map((item,index)=>{
			// 定义图片序列号
			return (<li key={index} style={liStyle}>
				<div className="flex">
					<div className="item-img flex1"><img alt={item.title} src={item.imgUrl} /></div>
					<div className="item-content flex1">
						<h2 className='headline-titie'>{item.title}</h2>
						<p>{item.desc}</p>
						<a href={item.url} className="button button-green">继续阅读</a>
					</div>
				</div>
				</li>
			);
		});
		var pointBond =  imgs.map((item,index)=>{
			// 定义图片序列号
			return (<a href="javascript:;" key={index} className={index === currentIndex?'active':''} onClick={this.stickyChange} data-index={index}></a>)
		});
		return (
			<div id="sticky">
				<div className="sticky_content" style={liStyle}>
					<ul
					style={ulStyle}
					onTouchStart={this.onTouchStart}
					onTouchMove={this.onTouchMove}
					onTouchEnd={this.onTouchEnd}
					>
						{imgsBond}
					</ul>
					<div className="point">
						{pointBond}
					</div>
				</div>
					<div className="turn">
						<a href="javascript:;" data-direction="left" onClick={this.stickyChange} className="iconfont icon_left"></a>
						<a href="javascript:;" data-direction="right" onClick={this.stickyChange} className="iconfont icon_right"></a>
					</div>
				</div>
			)
	}
	tryStartAuto(){
		// 尝试启动轮播
		const sticky = this.props.param.sticky.toJS();
		const imgs = sticky.result;
		if (imgs.length < 2) {
			return;
		}
		this.autoTimer = setInterval(()=>{
			this.props.param.slideAuto();
		},sticky.interval || 2000)
	}
	onTouchStart(){}
	onTouchMove(){}
	onTouchEnd(){}
	stickyChange(e){
		const {StickyChange} = this.props.param;
		e = e.nativeEvent;
		StickyChange({
			direction:e.target.dataset.direction,
			index:e.target.dataset.index
		});
	}
}


export default Sticky;