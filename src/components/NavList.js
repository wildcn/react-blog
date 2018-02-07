import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './template/Home';
import Column from './Column';

export default (
	<Route path="/" component={Home} >
		<Route path="/column" component={Home} ></Route>
	</Route>
)