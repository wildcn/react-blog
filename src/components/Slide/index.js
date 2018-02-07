/*
** 轮播图效果
*/

import React from 'react';
import styled from 'styled-components';
import './../../styles/slide.scss'

class Headline extends React.Component{
	constructor(props) {
		super(props);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	componentDidMount(){
		this.resetSlider();
	}
	resetSlider(){
		// 重置组件状态
		// 至少2张图片，才能启动轮播
    	this.tryStartAuto();
	}
	render(){
		const headline = this.props.param.headline.toJS();
		const {option} = this.props;
		const currentIndex = headline.currentIndex || 0;
		// 定义相关参数
		const wrapperStyle = {
			width:`${option.width}px`,
			height:`${Number(option.width.replace(/px/,''))/2}px`
		};
		
		const imgs = headline.result;
		// 生成图片池
		const imgsBond = imgs.map((item,index)=>{
			// 定义图片序列号
			let refName = `IMG_${index}`,
				liClass = currentIndex === index?'dis':'undis';
			return (
				<li key={index} className={liClass}>
					<a href={item.src}>
						<img alt={item.title} src={item.imgUrl} key={index} ref={refName} />
						<p className='headline-titie'>{item.title}</p>
					</a>
				</li>
				)
		});
		return (
				<div id="slide" ref="SlideWrapper" style={wrapperStyle}>
					<ul 
					ref="SlideList"
					onTouchStart={this.onTouchStart}
					onTouchMove={this.onTouchMove}
					onTouchEnd={this.onTouchEnd}
					onClick={this.handleOnClick}
					>
						{imgsBond}
					</ul>
					<div className="point">
					{imgs.map((item,index)=>{
						let iClass = index === currentIndex?'active':'';
						return (<i key={index} className={iClass} onClick={this.handleOnClick} data-index={index}></i>)
					})}
					</div>
				</div>
			
			)
	}
	tryStartAuto(){
		// 尝试启动轮播
		const headline = this.props.param.headline.toJS();
		const imgs = headline.result;
		if (imgs.length < 2) {
			return;
		}
		this.autoTimer = setInterval(()=>{
			this.props.param.slideAuto();
		},headline.interval || 2000)
	}
	onTouchStart(){}
	onTouchMove(){}
	onTouchEnd(){}
	handleOnClick(e){
		const {SlideOnclick} = this.props.param;
		e = e.nativeEvent;
		SlideOnclick(e.target.dataset.index);
	}
}


export default Headline;