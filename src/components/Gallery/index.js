/*
 ** 相册
 */

import React from 'react';
import './../../styles/component/gallery.scss';
const footerStyle ={
	'background':'#363d4d'
}
class Gallery extends React.Component {
	goto(index){
		var ul = document.querySelector('.mygallery ul'),
			lis = ul.childNodes,
			points = document.querySelector('.mygallery .point').childNodes,
			galleryDom = document.querySelector('.mygallery'),
			curIndex = galleryDom.getAttribute('data-active');
		curIndex = +curIndex;
		if (index === curIndex) {
			return;
		}
		// 记录显示index
		galleryDom.setAttribute('data-active',index);
		// 清除原active
		lis[curIndex].className = lis[curIndex].className.replace(/active/,'');
		points[curIndex].className = points[curIndex].className.replace(/active/,'');
		// 设置新active
		lis[index].className += 'active';
		points[index].className += 'active';
		// 设置大图滚动css
		this.ulStyle['transform'] = `translate3d(-${index*this.liWidth}px,0px,0px)`;
		this.ulStyle['WebkitTransform'] = `translate3d(-${index*this.liWidth}px,0px,0px)`;
		var styles = [];
		for(var i in this.ulStyle){
			styles.push(`${i}:${this.ulStyle[i]}`);
		}
		ul.setAttribute('style',styles.join(';'))

	}
	change(direction){
		var total = this.props.imgs.length-1,
			curIndex = +document.querySelector('.mygallery').getAttribute('data-active');

		if (direction === 0) {
			// 向左滑动
			this.goto(curIndex === 0?total:--curIndex);
		}
		if (direction === 1) {
			this.goto(curIndex === total?0:++curIndex);	
		}
	}
	render() {
		const imgs = this.props.imgs,
			config = this.props.config;
		this.liWidth = config.width;
		this.ulStyle = {
			width:`${config.width*imgs.length}px`,
			transform:'translate3d(0px,0px,0px)',
			'WebkitTransform':'translate3d(0px,0px,0px)',
		};
		var liStyle = {
			width:config.width
		},
		curIndex = 0;
		return (<div className="mygallery" data-active={curIndex}>
			<ul style={this.ulStyle}>
				{imgs.map((item,index)=>(<li style={liStyle} className={`gallery_li_${index} ${index === curIndex?'active':''}`}><img src={item} /></li>))}
			</ul>
			<div className="point flex">
				{imgs.map((item,index)=>(<a onClick={this.goto.bind(this,index)} href="javascript:;" className={`flex1 point_${index} ${index === curIndex?'active':''}`}><img src={item} /></a>))}
			</div>
			<a onClick={this.change.bind(this,0)} href="javascript:;" className="mygallery_left iconfont icon_left"></a>
			<a onClick={this.change.bind(this,1)} href="javascript:;" className="mygallery_right iconfont icon_right"></a>
		</div>)
	};
}

export default Gallery;