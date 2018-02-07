/*
 ** 栏目样式1
 */

import React from 'react';


class ColumnStyle1 extends React.Component {
	render() {
		const bclassInfo = this.props.param.nav[+this.props.classid],
			bclass = bclassInfo,
			sclass = bclassInfo.children;
		return (
			<div>
				<div className="h1-title"><a href=""><h2>{bclass.classname}</h2><span>{bclass.classpath}</span></a></div>
		          <div className="h3-list">
		            <ul>
		            {sclass.map((item,index)=>(<li key={index}><a href={`/news/${item.classid}`}>{item.classname}</a></li>))}
		            </ul>
		          </div>
			</div>
		)
	};
}



export default ColumnStyle1;