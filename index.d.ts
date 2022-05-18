import {Model} from 'dva-core-ts';

declare module 'dva-model-extend' {
  export default function modelExtend(...model: Model[]): Model;
}

declare module '*.png';
