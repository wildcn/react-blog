import './styles/app.scss'
import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import createRoutes from './routes'
import App from './containers/App'
import {Router,browserHistory} from 'react-router'
import {
	Provider
} from 'react-redux';
const store = configureStore({});
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

render(
	<Provider store={store}>
	    <Router
	      history={browserHistory}
	      routes={rootRoute}
	    />
  </Provider>, document.getElementById('app')
	);
registerServiceWorker();