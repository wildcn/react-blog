webpackJsonp([1],{508:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return console.log(e.toJS()),e.toJS()}function l(e){return n.i(f.a)(Object.assign({},p),e)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(15),s=n.n(c),u=n(58),p=(n(229),n(531)),f=n(45),m=n(629),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),y(t,[{key:"componentWillMount",value:function(){var e={id:this.props.routeParams.id,fields:"id,date,link,title,content,excerpt,author,comment_status,sticky,format,categories,tags,better_featured_image.source_url,media_all",medias:"media,video"};this.props.getNewsContent(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.a,{param:this.props}))}}]),t}(s.a.Component);t.default=n.i(u.b)(i,l)(d)},531:function(e,t,n){"use strict";function a(e){var t=""+o.a.getNewsContent+e.id+"?";for(var a in e)t+=a+"="+e[a]+"&";return n.i(r.a)({api:t,action:i})}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"GET_NEWS_CONTENT",function(){return i}),t.getNewsContent=a;var r=n(80),o=n(79),i="article/GET_NEWS_CONTENT"},551:function(e,t,n){t=e.exports=n(32)(void 0),t.push([e.i,'@charset "UTF-8";\n/*\u7f51\u7ad9\u6837\u5f0f\u53c2\u6570*/\n.detail {\n  width: 1000px;\n  margin: 30px auto; }\n  .detail h1 {\n    font-size: 24px;\n    padding: 10px 0; }\n  .detail .source {\n    padding: 10px 0;\n    color: #626773; }\n  .detail img {\n    max-width: 100%; }\n  .detail .description {\n    padding: 20px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-size: 14px;\n    color: #626773;\n    border: 1px solid #f0f2f7;\n    line-height: 1.4em;\n    margin: 10px auto; }\n  .detail .content p, .detail .content span {\n    color: #000;\n    font-size: 16px;\n    line-height: 1.4em; }\n  .detail .content a {\n    color: #8cbcf7; }\n  .detail .content p {\n    margin-bottom: 15px; }\n',""])},552:function(e,t,n){t=e.exports=n(32)(void 0),t.push([e.i,'@charset "UTF-8";\n/*\u7f51\u7ad9\u6837\u5f0f\u53c2\u6570*/\n.gallery {\n  display: none; }\n\n.mygallery {\n  width: 1000px;\n  height: 620px;\n  overflow: hidden;\n  margin: 15px auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: 0 0 2px #3c4a66;\n  box-shadow: 0 0 2px #3c4a66;\n  position: relative; }\n  .mygallery ul {\n    -webkit-transition: all .5s;\n    -o-transition: all .5s;\n    transition: all .5s; }\n  .mygallery ul li {\n    float: left;\n    width: 1000px;\n    height: 600px;\n    background-color: #f0f2f7; }\n    .mygallery ul li img {\n      width: 100%;\n      height: auto;\n      min-height: 100%; }\n  .mygallery .point {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 1000px;\n    height: 20px;\n    background-color: #fff; }\n    .mygallery .point > a {\n      background-color: rgba(0, 0, 0, 0.6);\n      border-right: 1px solid #eee;\n      position: relative;\n      -webkit-transition: all 0.3s;\n      -o-transition: all 0.3s;\n      transition: all 0.3s;\n      cursor: pointer; }\n      .mygallery .point > a:last-child {\n        border-right: 0; }\n      .mygallery .point > a img {\n        position: absolute;\n        width: 100%;\n        height: auto;\n        top: 0;\n        left: 0;\n        opacity: .2;\n        -webkit-transition: all 0.3s;\n        -o-transition: all 0.3s;\n        transition: all 0.3s; }\n      .mygallery .point > a.active {\n        background-color: #46b755; }\n        .mygallery .point > a.active img {\n          top: 20px; }\n      .mygallery .point > a:hover {\n        background-color: #fff; }\n        .mygallery .point > a:hover img {\n          display: block;\n          top: -50px;\n          opacity: 1; }\n  .mygallery a.mygallery_left,\n  .mygallery a.mygallery_right {\n    position: absolute;\n    height: 600px;\n    width: 50px;\n    line-height: 600px;\n    top: 0%;\n    left: 0;\n    font-size: 40px;\n    color: #3c4a66;\n    -webkit-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n    text-align: center;\n    z-index: 10; }\n    .mygallery a.mygallery_left:hover,\n    .mygallery a.mygallery_right:hover {\n      color: #46b755;\n      background-color: rgba(0, 0, 0, 0.5); }\n  .mygallery a.mygallery_right {\n    left: auto;\n    right: 0; }\n',""])},629:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(15),l=n.n(i),c=(n(60),n(630)),s=n(631),u=(n.n(s),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),p=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.param.Detail.content,t={width:1e3};return e.title?l.a.createElement("div",{className:"detail"},l.a.createElement("h1",null,e.title.rendered),l.a.createElement("div",{className:"source"},l.a.createElement("span",{className:"source_name"},"\u65f6\u95f4\uff1a",l.a.createElement("time",{className:"time"},e.date)),e.tagInfo&&e.tagInfo.length?l.a.createElement("span",{className:"source_name"},"\u5173\u952e\u8bcd\uff1a",e.tagInfo.map(function(e){return l.a.createElement("keyword",{className:"keyword"},e.name)})):"",e.userinfo?l.a.createElement("span",{className:"source_name"},"\u4f5c\u8005:",l.a.createElement("author",{className:"time"})):""),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),e.media_all&&l.a.createElement(c.a,{config:t,imgs:e.media_all}),l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.content.rendered}})):l.a.createElement("div",null)}}]),t}(l.a.Component);t.a=p},630:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(15),l=n.n(i),c=n(632),s=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"goto",value:function(e){var t=document.querySelector(".mygallery ul"),n=t.childNodes,a=document.querySelector(".mygallery .point").childNodes,r=document.querySelector(".mygallery"),o=r.getAttribute("data-active");if(o=+o,e!==o){r.setAttribute("data-active",e),n[o].className=n[o].className.replace(/active/,""),a[o].className=a[o].className.replace(/active/,""),n[e].className+="active",a[e].className+="active",this.ulStyle.transform="translate3d(-"+e*this.liWidth+"px,0px,0px)",this.ulStyle.WebkitTransform="translate3d(-"+e*this.liWidth+"px,0px,0px)";var i=[];for(var l in this.ulStyle)i.push(l+":"+this.ulStyle[l]);t.setAttribute("style",i.join(";"))}}},{key:"change",value:function(e){var t=this.props.imgs.length-1,n=+document.querySelector(".mygallery").getAttribute("data-active");0===e&&this.goto(0===n?t:--n),1===e&&this.goto(n===t?0:++n)}},{key:"render",value:function(){var e=this,t=this.props.imgs,n=this.props.config;this.liWidth=n.width,this.ulStyle={width:n.width*t.length+"px",transform:"translate3d(0px,0px,0px)",WebkitTransform:"translate3d(0px,0px,0px)"};var a={width:n.width};return l.a.createElement("div",{className:"mygallery","data-active":0},l.a.createElement("ul",{style:this.ulStyle},t.map(function(e,t){return l.a.createElement("li",{style:a,className:"gallery_li_"+t+" "+(0===t?"active":"")},l.a.createElement("img",{src:e}))})),l.a.createElement("div",{className:"point flex"},t.map(function(t,n){return l.a.createElement("a",{onClick:e.goto.bind(e,n),href:"javascript:;",className:"flex1 point_"+n+" "+(0===n?"active":"")},l.a.createElement("img",{src:t}))})),l.a.createElement("a",{onClick:this.change.bind(this,0),href:"javascript:;",className:"mygallery_left iconfont icon_left"}),l.a.createElement("a",{onClick:this.change.bind(this,1),href:"javascript:;",className:"mygallery_right iconfont icon_right"}))}}]),t}(l.a.Component);t.a=u},631:function(e,t,n){var a=n(551);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(33)(a,r);a.locals&&(e.exports=a.locals)},632:function(e,t,n){var a=n(552);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(33)(a,r);a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=1.9b962432.chunk.js.map