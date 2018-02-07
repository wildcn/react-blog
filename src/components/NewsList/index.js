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
		return (<div className="newsbox">
				{newslist.map((item,index)=>{
					return (<li key={index}>
							{item.sort?(<i className="sort_num">{index+1}</i>):''}
							<a href={item.src} target="_blank">{item.title}</a>
						</li>)
				})}
			</div>);
	}
}



export default News;