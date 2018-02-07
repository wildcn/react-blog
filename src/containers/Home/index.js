import React from 'react';
import {
  connect
} from 'react-redux';
import CommonNewsList from './../../containers/Block/CommonNewsList'
import Sticky from './../../components/Sticky'
import * as AccountActions from './action'
import {
  bindActionCreators
} from 'redux';
import options from './../../modules/option';
import styled from 'styled-components';
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
    margin:20px auto;
    overflow:hidden;
    display:block;
    'background-color':#fff;
`;
const Chief = styled.div `
  width:${chief};
  float:left;
`;
const Extra = styled.div `
  width:${extra};
  float:right;

`;
const listConfig = {
  classid: 0
}
const commonListSectionStyle = {
  'background-color': '#f0f2f7',
  width: '100%',
  'margin-bottom': 0
}

class Home extends React.Component { // eslint-disable-line
  
  render() {
    return (
      <div className="home oh">
        <Section>
          <Sticky param={this.props}/>
        </Section>
        <Section style={commonListSectionStyle}>
          <CommonNewsList 
          config={listConfig}
          />
        </Section>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const stateJS = state.toJS();
  var result = {};
  // 将state中各模块的数据中取出合并
  for (var i in stateJS) {
    for (var j in stateJS[i]) {
      result[j] = stateJS[i][j]
    }
  }
  return (result);
}


function mapDispatchToProps(dispatch) {
  // 头条
  dispatch(AccountActions.GetHeadline());

  return bindActionCreators({...AccountActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);