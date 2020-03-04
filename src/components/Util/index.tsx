/* eslint-disable new-cap */
import React from 'react';
import Loadable from 'react-loadable';
import {Modal, message} from 'antd';

/**
 * 通用的过场组件
 *
 * @return {any}
 */
const LoadingComponent: React.FC = () => {
  return (
    <div>loading...</div>
  );
};

/**
 * 动态加载组件，过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
 *
 * @param {*} loader
 * @param {*} [loading=LoadingComponent]
 * @return {any}
 */
function loading(loader: any, loading = LoadingComponent) {
  return Loadable({
    loader,
    loading,
  });
};

/**
 * 全局显示成功信息
 */
const showSuccess = message.success;
/**
 * 全局显示提示信息
 */
const showInfo = message.info;
/**
 * 全局显示错误信息
 */
const showError = message.error;

const {confirm} = Modal;

/**
 * 删除确认提示
 *
 * @param {*} [opt={}]
 */
const showDeleteConfirm = (opt: {
  title?: string,
  content?: string,
  okAction?: Function
} = {}) => {
  confirm({
    title: opt.title || '确定要删除吗？',
    content: opt.content || '',
    okText: '是',
    okType: 'danger',
    cancelText: '否',
    onOk() {
      console.log('OK');
      opt.okAction && opt.okAction();
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

export {
  loading,
  showSuccess,
  showInfo,
  showError,
  showDeleteConfirm,
};

