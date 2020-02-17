/**!
 * @description: 用户管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-01-19 12:09:02
 * @LastEditors: zpl
 */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { sex, role } from '../../common/dictionary';
import api from '../../common/api';
import https from '../../utils/https';

interface UserInfo {
  _id: string,
  userName: string,
  name: string,
  sex: sex,
  mobilePhone: string,
  role: role,
  email: string
}

const UserManager = () => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    https.get(api.getUsers).then((res) => {
      setUserList(res.data);
    });
  }

  const columns = [
    {
      dataIndex: '_id',
      key: '_id',
      render: () => '',
    },
    {
      title: '登录名',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex'
    },
    {
      title: '手机号码',
      dataIndex: 'mobilePhone',
      key: 'mobilePhone'
    },
    {
      title: '权限',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    },
  ];

  const pagination = {
    defaultPageSize: pageSize,
    defaultCurrent: pageIndex,
    total: userList.length,
    hideOnSinglePage: true
  }

  return (
    <div>      
      <Table columns={columns} dataSource={userList} pagination={pagination} />
    </div>
  )
}

export default UserManager;