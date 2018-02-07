// import user from './user';
import home from './home';
import news from './news';


const modules = [home,news];

// 为了根据模块名称找到文件
const convFirstChartUpper = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);


const prefixPath = '';
function addRoutePath(module, parentPath) {
  let child;
  if (module.child) {
    child = module.child.map((c) => addRoutePath(c, `${parentPath}/${module.path}`));
  }
  return {
    ...module,
    routePath: `${parentPath}/${module.route ? module.route : module.path}`,
    child,
  };
}
const filterModule = (isNavbar) => {
  const filter = (module) => {
    const { child, hideInMenu } = module;
    let newModule = module;
    if (hideInMenu && isNavbar) return null;
    if (child) {
      let filtedChild = child.map(filter).filter((m) => m);
      filtedChild = filtedChild.length !== 0 ? filtedChild : undefined;
      newModule = {
        ...module,
        child: filtedChild,
      };
    }
    return addRoutePath(newModule, prefixPath);
  };

  return filter;
};
export const routes = modules.map(filterModule());
export const NavBarMenu = modules.map(filterModule(true));
export default (loadComponent, loader) => {
  const wrapperRoute = (module, parentURL = '') => {
    const { path, child, route } = module;
    const modulePath = `${convFirstChartUpper(path)}`;
    return {
      path: route || path,
      getComponent(nextState, cb) {
        loadComponent({ ...module, modulePath: `${modulePath}` }, cb, loader);
      },
      childRoutes: child && child.map((childModule) => wrapperRoute(childModule, modulePath)),
    };
  };
  return routes.map((module) => wrapperRoute(module));
};
