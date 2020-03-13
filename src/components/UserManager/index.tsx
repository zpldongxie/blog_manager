/** !
 * @description: 用户管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-03-06 16:07:01
 * @LastEditors: zpl
 */
import React, {useState, useEffect} from 'react';
import {Table} from 'antd';

import UserInfo from './user.interface';
import api from '../../common/api';
import https from '../../utils/https';

const UserManager: React.FC = () => {
  const pageSize = 2;
  const pageIndex = 1;
  const [userList, setUserList] = useState<UserInfo[]>([]);

  const getUserList = (): void => {
    https.get(api.getUsers).then((res) => {
      setUserList(res.data);
    });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const columns = [
    {
      dataIndex: '_id',
      key: '_id',
      render: (): string => '',
    },
    {
      title: '登录名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '手机号码',
      dataIndex: 'mobilePhone',
      key: 'mobilePhone',
    },
    {
      title: '权限',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  const pagination = {
    defaultPageSize: pageSize,
    defaultCurrent: pageIndex,
    total: userList.length,
    hideOnSinglePage: true,
    showQuickJumper: true,
    showSizeChanger: true,
  };

  return (
    <div>
      <Table
        rowKey={(record: UserInfo): string => record._id || ''}
        columns={columns}
        dataSource={userList}
        pagination={pagination}
      />
    </div>
  );
};

export default UserManager;
