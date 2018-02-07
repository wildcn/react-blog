/*
 ** 文章列表数据
 */
import React from 'react';
import options from './../../modules/option';
class ListFlow extends React.Component {
	render() {
		console.log(this.props)
		const needRender = this.props.param.curPond
		return (<div className="page">{needRender.map((item,index)=>{
          return this.getItem(item,index);
      })}</div>)
	};
	handleVideoClick(event){
		var doms = this.addMore,
		child = doms.children;
		for(let i of child){
			if (i.nodeName.toLowerCase() === 'embed') {
				i.setAttribute('autoplay',true);
			}else{
				i.className += ' undis';
			}
		}
	}
	getItem(item, index) {
		var format = item.format,
			hasimg = item.better_featured_image,
			imgUrl = hasimg ? hasimg.media_details.sizes.thumbnail ? hasimg.media_details.sizes.thumbnail.source_url : hasimg.source_url : '',
			ItemImg;
		switch (format) {
			// 视频
			case 'video':
				if (item.video_all) {
					var videoUrl = item.video_all[0];
					ItemImg = (
				<div className="item-img item-video"  ref={(node) => this.addMore = node} onClick={this.handleVideoClick.bind(this)}>
					{imgUrl ? (<img src={imgUrl} />) : ''}
					{imgUrl ? (<i className="iconfont icon_video"></i>) : ''}
	          		<embed  src={videoUrl} type="application/x-shockwave-flash" width="100%" height="100%" ></embed>
					
	          	</div>
					);
				}
				break;
				// 相册
			case 'image': 
			console.log(item);
				var media_all = item.media_all;
				const imgStyle = {
					width:(320*media_all.length)+'px',
					transform:item.css,
					'-webkit-transform':item.css
				}
				ItemImg =  (
					<a className="item-img" href={item.url}>
					<div className="item-imgs" style={imgStyle}>
						{media_all.map((everyImg)=>(<div className="img-box"><img  src={everyImg} /></div>))}
		            </div>
	            {this.getImagesTool(item,index)}
	          </a>
				);
				break;
				// 默认 aside(日志) standard(标准) 执行默认
			default:
				ItemImg = imgUrl ? (<div className="item-img"><img src={imgUrl} /></div>) : '';
		};
		const liStyle={
			width:options.layout.primary.listflow.liWidth,
			height:options.layout.primary.listflow.liHeight,
		}
		return (<li style={liStyle} className={`${format} default ${imgUrl?'img':''}`} data-index={++index}>
          {ItemImg}
          <a className="item-content" href={item.url}>
            <h3 className="item-title">{item.title.rendered}</h3>
            <div className="item-desc" dangerouslySetInnerHTML={{__html: item.excerpt.rendered.replace(/<br\s\/>/g,'</p><p>')}} ></div>
        </a>
        </li>);
	}
	handleClick() {
		this.props.OnClickAction();
	}
	getImagesTool(data,idx) {
		var imgs = data.media_all,
			curIndex = +data.index,
			idx = ++idx;
		var point, i = 0;
		point = (<div className="point">{
			imgs.map((item,index)=>(<a 
				href="javascript:;" 
				data-pointindex={index} 
				onClick={this.props.param.photoChange} 
				data-index={idx} 
				className={index === curIndex?'active':''}
				></a>))
		}</div>)
		return (<div className="tools">
        <a data-index={idx} data-direction="left" href="javascript:;" onClick={this.props.param.photoChange} className="iconfont icon_left img-left"></a>
        <a data-index={idx} data-direction="right" href="javascript:;"  onClick={this.props.param.photoChange} className="iconfont icon_right img-right"></a>
        {point}
      </div>)
	}
}

export default ListFlow;