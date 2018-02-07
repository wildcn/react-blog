/*
 ** build top nav
 */
import React from 'react';
import GetNewsClass from './../fetch/GetNewsClass';
// import {bindActionCreators} from 'redux';
import {
	Router,
	Route,
	browserHistory,
	IndexRoute
} from 'react-router'
import Home from './../template/Home';
import News from './../template/News';
import {
	Provider,
	connect
} from 'react-redux';
import configureStore from '../../store/header';
import * as actions from '../../action/header';

const store = configureStore();
const Ul = (props) => (
	<Route data={props} path="/"  component={GetNewsClass}>
       <IndexRoute component={Home}/>
       <Route  path="/news(/:name)"  component={News}/>
    </Route>
);
const routeConfig = [{
	path: '/',
	component: GetNewsClass,
	data: store.getState(),
	indexRoute: {
		component: Home
	},
	childRoutes:[
		{
			path: '/news(/:name)',
			component: News,
		}
	]
	}];
class Routers extends React.Component {
	render() {
		return (
			<Router history={browserHistory} data-my = {this} routes={routeConfig.map((item)=>{
				item.onMouseOver = this.props.onMouseOver
				return item;
			})}>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return (state)
}
const mapDispatchToProps = (dispatch) => {
	return ({
		onMouseOver: (id) => {
			return dispatch(actions.onMouseOverAction(id))
		}
	});
}
const NavConnect = connect(mapStateToProps, mapDispatchToProps)(Routers);
export default NavConnect;
