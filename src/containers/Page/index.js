import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AccountActions from './actions';

class Account extends React.Component { // eslint-disable-line
  componentWillMount() {
    this.props.loadApps();
  }
  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

Account.propTypes = {
  children: React.PropTypes.node,
  loadApps: React.PropTypes.func,
};

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...AccountActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
