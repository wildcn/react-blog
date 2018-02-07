import React from 'react';
import {
  connect
} from 'react-redux';
import NavBar from '../../components/NavBar';
import * as AccountActions from './action'
import {
  bindActionCreators
} from 'redux';
import Article from './../../components/Article'
class Detail extends React.Component { // eslint-disable-line
  componentWillMount() {
    const param = {
      id:this.props.routeParams.id,
      fields:'id,date,link,title,content,excerpt,author,comment_status,sticky,format,categories,tags,better_featured_image.source_url,media_all',
      medias:'media,video'
    };
    this.props.getNewsContent(param)
  };
  render() {
    return (
      <div>
      <Article param={this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.toJS())
  return (state.toJS());
}


function mapDispatchToProps(dispatch) {
  // load headline
  return bindActionCreators({...AccountActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);