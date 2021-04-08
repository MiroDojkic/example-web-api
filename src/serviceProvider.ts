import Provider from 'bottlejs';
import { IRouter, RouterFactory } from './types/Router';
import { ControllerFactory } from './types/Controller';

const provider = new Provider();
const modules: string[] = [];

type Module = {
  Router: RouterFactory,
  Controller: ControllerFactory
}

function registerModule(name: string, module: Module) {
  modules.push(name);
  Object.entries(module).forEach(([key, subModule]) => {
    provider.factory(`${name}${key}`, subModule);
  })
}

type MapRouterCallback = (router: IRouter) => any;
function mapRouters(cb: MapRouterCallback) {
  return modules.map(module => {
    return cb(provider.container[`${module}Router`])
  })
}

export default provider;
export { registerModule, mapRouters };
