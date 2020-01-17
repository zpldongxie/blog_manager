/*
 * @description: 动态加载组件
 * @author: zpl
 * @Date: 2020-01-17 11:57:22
 * @LastEditTime : 2020-01-17 12:04:22
 * @LastEditors  : zpl
 */
import React from 'react';
import Loadable from 'react-loadable';

//通用的过场组件
const LoadingComponent: React.FC = () => {
  return (
      <div>loading...</div>
  ) 
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader: any, loading = LoadingComponent) => {
  return Loadable({
    loader,
    loading
  });
}