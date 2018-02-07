/*
** 正文
*/

import React from 'react';
import styled from 'styled-components';
import Gallery from './../Gallery/index'
import './../../styles/component/article.scss';

class Article extends React.Component{
	render(){
		const {content} = this.props.param.Detail;
		const galleryConfig = {
			width:1000,
		}
		if (!content.title) {
			return (<div></div>)
		}
		return (
			<div className="detail">
				<h1>{content.title.rendered}</h1>
				<div className="source">
				<span className="source_name">时间：<time className="time">{content.date}</time></span>
				{content.tagInfo && content.tagInfo.length?(<span className="source_name">关键词：{content.tagInfo.map((item)=>(<keyword className="keyword">{item.name}</keyword>))}</span>):''}
				{content.userinfo?(<span className="source_name">作者:<author className="time"></author></span>):''}
				</div>
				<div className="description" dangerouslySetInnerHTML={{__html: content.excerpt.rendered}}></div>
				{content.media_all && (<Gallery config={galleryConfig} imgs={content.media_all} />)}
				<div className="content" dangerouslySetInnerHTML={{__html: content.content.rendered}}>
				</div>
			</div>
			)
	}
	
}


export default Article;