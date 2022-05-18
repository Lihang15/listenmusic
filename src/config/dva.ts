import {create, Model} from 'dva-core-ts';
import models from '../models/all-models';
import createLoading from 'dva-loading-ts';
import modelExtend from 'dva-model-extend';
import homeModel from '@/models/home';

// 1.创建实例
const app = create();
// 2.加载model对象
models.forEach(model => {
  app.model(model);
});
// 3.启动dva
app.use(createLoading());
app.start();
// 4.导出dva数据
export default app._store;

interface Cached {
  [key: string]: boolean;
}
const cached: Cached = {
  home: true,
};
function registerModel(model: Model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = true;
  }
}
// 动态生成model
export function createHomeModel(namespace: string) {
  const model = modelExtend(homeModel, {namespace});
  registerModel(model);
}
