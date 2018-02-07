/*
 ** 抓整站导航数据
 ** 杜连强
 ** 2017年07月27日19:15:48
 */
import React from 'react';
import NavLink from './../NavLink'
class TopNavList extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		var headerData = this.props.route.data.header;
		this.state = {
			header:headerData && headerData.length ? headerData : []
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
	}
	primaryList() {
		// 栏目地址规则 /news/生活
		return (
			this.state.header.map(item => {
				let path = item.bclass.tbname?`/${item.bclass.tbname}/${item.bclass.bclassname}`:'/';
				return (
				<li id={`b_${item.bclass.bclassid}`} key={`key_${item.bclass.bclassid}`} onMouseOver={this.handleMouseOver}>
      		 	<NavLink onlyActiveOnIndex key={`key_${item.bclass.bclassid}`} name={item.bclass.bclassname}  to={path}>
      		 	<i className="path">{`${item.bclass.bclasspath.toUpperCase()}`}</i>
      		 	{item.bclass.bclassname}
      		 	</NavLink>
      		 	</li>
			)})
		)
	};
	handleMouseOver(event){
		// 绑定hover事件
		event = event.nativeEvent;
		const tr = event.target.parentNode;
		const id = tr.id.replace(/b_/,'');
		this.props.route.onMouseOver(id);
	}
	sencondaryList() {
		let sencondaryPond = [];
		this.state.header.map((item) => {
			let thirdPond = []; {
				item.sonclass && item.sonclass.map((sonItem) => {
					sonItem.classpath = sonItem.classpath.toUpperCase();
					thirdPond.push(<li key={`key_${sonItem.classid}`}>
					<NavLink key={`key_${sonItem.classid}`} name={sonItem.classname}  to={`/${sonItem.tbname}/${sonItem.classname}`}>
					<i className="path">{sonItem.classpath}</i>{sonItem.classname}
					</NavLink>
					</li>)
				})
			};
			sencondaryPond.push(<ul key={`key_${item.bclass.bclassid}`} id={`sencondaryUl_${item.bclass.bclassid}`}>{thirdPond}</ul>)
			thirdPond = [];
		})
		return sencondaryPond;
	};
	render() {
		return (<div className="top-nav">
			<div className="primary">
				<ul>
			        {this.primaryList()}
		        </ul>
	        </div>
	        <div className='sencondary'>
	        	{this.sencondaryList()}
	        </div>
	        {this.props.children}
		</div>)
	}
}


export default TopNavList;