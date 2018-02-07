import React from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as actions from './action';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import QuickTools from '../../components/QuickTools'

class AppWrapper extends React.Component { // eslint-disable-line
    componentDidMount() {
       var params = this.props.params || {};
      if (params.classid && +params.classid !== 0) {
        this.props.onMouseOverAction(+params.classid);
      }
    }
    render() {
      
      return (
        <div className="app">
          <NavBar param={this.props} />
          {React.Children.toArray(this.props.children)}
          <Footer param={this.props} />
          <QuickTools />
      </div>
      );
    }
}

function mapStateToProps(state) {
  const stateJS = state.toJS();
  const mapState = stateJS.global ? stateJS.global : stateJS;
  return (mapState);
}


function mapDispatchToProps(dispatch) {
     // 友情链接
  // dispatch(actions.GetFriendLink());
  return bindActionCreators({...actions
  }, dispatch);
}
AppWrapper.propTypes = {
  children: React.PropTypes.node,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);