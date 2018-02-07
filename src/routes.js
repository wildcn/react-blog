import {
  getAsyncInjectors
} from './utils/asyncInjectors'
import App from './containers/App/index'
import Home from './containers/Home/index'
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};


export default function createRoutes(store) {
  const {injectReducer} = getAsyncInjectors(store);
  const loadComponent = ({modulePath,path,PageReducers}, cb, loader) => {
    const renderRoute = loader(cb);
    // import相应模块，先加载reducer，最后加载页面component
    const imports = [];
    PageReducers && PageReducers.map((item) => imports.push(
      import (`./containers/${item}/reducer`)));
    imports.push(
      import (`./containers/${modulePath}/index`))
    // console.log(imports)
    const importModules = Promise.all(imports);

    importModules.then((promiseObject) => {
      PageReducers.map((reducerName, index) => injectReducer(reducerName, promiseObject[index].default))
      renderRoute(promiseObject[promiseObject.length - 1]);
    }).catch(errorLoading);
  };
  const routeResult = [{
      path: '/',
      name: 'home',
      indexRoute: {
        component: App
      },
      getComponent(nextState, cb) {
        loadComponent({
          modulePath: 'Home',
          PageReducers: ['Home', 'Block/CommonNewsList'],
        }, cb, loadModule);
      },
      // getChildRoutes(partialNextState, cb) {
      //   import ('./modules').then((route) => { // eslint-disable-line
      //     cb(null, route.default(loadComponent, loadModule));
      //   });
      // },
    }, {
      path: '/category/:classid',
      name: 'category',
      getComponent(nextState, cb) {
        loadComponent({
          modulePath: 'Category',
          PageReducers: ['Category','Block/CommonNewsList'],
        }, cb, loadModule);
      },
    },
    {
      path: '/category/:classid/:tclassid',
      name: 'category',
      getComponent(nextState, cb) {
        loadComponent({
          modulePath: 'Category',
          PageReducers: ['Category','Block/CommonNewsList'],
        }, cb, loadModule);
      },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      getComponent(nextState, cb) {
        loadComponent({
          modulePath: 'Detail',
          PageReducers: ['Detail'],
        }, cb, loadModule);
      },
    },

  ];
  return routeResult;
}