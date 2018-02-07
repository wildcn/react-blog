/*
 ** 文章列表数据
 */
import React from 'react';
import {scrollTo} from './../../utils/index';
import './../../styles/component/quick_tools.scss';
class QuickTools extends React.Component {
	render() {
		return (<div className="quick_tools">
			<a href="javascript:;" className="scroll_top iconfont icon_scroll_top" onClick={this.scrollTop.bind(this)}></a>
			</div>)
	};
	scrollTop(){
		scrollTo(0);
	}
	
}

export default QuickTools;