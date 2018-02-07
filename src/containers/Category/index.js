import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../../components/NavBar';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import CommonNewsList from './../../containers/Block/CommonNewsList'
import styled from 'styled-components';
import options from './../../modules/option';
const {
  offsetWidth
} = document.body;
const {
  main,
  extra,
  chief
} = offsetWidth > 1200 ? options.layout.primary : options.layout.smaller;
const Section = styled.div `
  width:${main};
    margin:0px auto;
    overflow:hidden;
    display:block;
    'background-color':#fff;
`;

const commonListSectionStyle = {
  'background-color': '#f0f2f7',
  width: '100%',
  'margin-bottom': 0
}

class News extends React.Component { // eslint-disable-line
  render() {
    const classid = this.props.routeParams.tclassid || this.props.routeParams.classid;
    var param = {
       classid:classid
    }
    return (
      <div>
          <Section style={commonListSectionStyle}>
          <CommonNewsList 
          config={param}
          />
          </Section>
      </div>
    );
  }
}

function mapStateToProps(state){
  return (state.toJS());
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
