import Provider from 'bottlejs';

const provider = new Provider();
const modules: string[] = [];

type Module = {
  Router: any,
  Controller: any,
  Repository: any
}

function registerModule(name: string, module: Module) {
  modules.push(name);
  Object.entries(module).forEach(([key, subModule]) => {
    provider.factory(`${name}${key}`, subModule);
  })
}

type MapRouterCallback = (router: Module['Router']) => any;
function mapRouters(cb: MapRouterCallback) {
  return modules.map(module => {
    return cb(provider.container[`${module}Router`])
  })
}

export default provider;
export { registerModule, mapRouters };
