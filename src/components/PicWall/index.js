/*
 ** 图片墙
 */

import React from 'react';

class News extends React.Component {
	render() {
		const picwall = this.props.param.picwall.toJS();
		if (!picwall.length) {
			return (<div></div>);
		}
		return (<div className="picwall">
				{picwall.map((item,index)=>{
					return (<li key={index}>
							<a href={item.src} target="_blank">
								<div className="item-img">
									<img 
									data-index={index}
									src={item.imgUrl}
									style={item.styles}
									alt={item.title}
									onLoad={this.handleOnLoad.bind(this)}
									onError={this.handleOnError.bind(this)}
									/>
								</div>
								<div className="item-content">
									<h3>{item.title}</h3>
									<p>{this.substr(item.desc,10)}</p>
								</div>
							</a>
						</li>)
				})}
			</div>);
	}
	handleOnLoad(e) {
		e = e.nativeEvent;
		var index = e.path[0].dataset.index;
		var style = '';
		var width = e.path[0].naturalWidth,
			height = e.path[0].naturalHeight,
			natureRatio = width / height;
		var liW = e.path[1].clientWidth,
			liH = e.path[3].offsetHeight,
			liRatio = liW / liH;
		if (natureRatio < liRatio) {
			style = {
				width: `${liW}px`,
				height: 'auto'
			}
		} else {
			style = {
				width: 'auto',
				height: `${liH}px`
			}
		}
		// console.log(` width ${width} height ${height}`)
		this.props.param.uploadImgSize({
			index: index,
			styles: style
		})

	}
	handleOnError() {}
	substr(txt, len = 40) {
		if (txt && txt.length < len) {
			return txt
		} else {
			return txt.substr(0, len) + '...';
		}
	}
}



export default News;