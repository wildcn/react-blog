/*
** 文章列表数据
*/

import React from 'react';


class News extends React.Component{
	render(){
		const newslist = this.props.param.toJS();
		if (!newslist.length) {
			return (<div></div>);
		}
		return (<div className="newshot">
				{newslist.map((item,index)=>{
					let $imgUrl = item.imgUrl?(<div className="item-img dib"><img width='100' src={item.imgUrl} /></div>):'';
					return (<li key={index}>
							<a href={item.src} target="_blank">
								{$imgUrl}
								<div className="item-content">
									<h2>{item.title}</h2>
									<p>{item.desc}</p>
								</div>
							</a>
						</li>)
				})}
			</div>);
	};
}



export default News;