/*
 ** 文章列表数据
 */

import React from 'react';
import styled from 'styled-components'
import './../../styles/component/footer.scss';

const footerStyle ={
	'background':'#363d4d'
}
class Footer extends React.Component {
	render() {
		const {
			friendlink
		} = this.props.param;
		const link = friendlink.length?(
			<div className="friendlink"><h3>友情链接</h3>{friendlink.map((item, index) => (<a key={index} target={item.target} href={item.url}>{item.name}</a>))}</div>
			):(<div></div>);
		return (<div style={footerStyle}>
				<div className="footer">
					{link}
					<div className="footer-nav">
						<a href="/">网站首页</a> 
			            <a href="https://ppkeji.com/">品评科技</a><a href="#">联系我们</a> <a href="#">广告服务</a> 
			            <a href="#">网站地图</a> <a href="#">免责声明</a> <a href="/e/wap/" target="_blank">WAP</a>
			        </div>
			        <div className="fz12 tac"><a>©2017</a><a href="mailto:wildcn@qq.com" target="_blank">Copyright by wildcn</a> <a href="http://www.miibeian.gov.cn" target="_blank">京ICP备15045703号-3</a> </div>
				</div>
			</div>);
	};
}

export default Footer;