/**!
 * @description: 文章管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-02-25 20:04:40
 * @LastEditors: zpl
 */
import React, { useState, useEffect } from 'react'

import api from '../../common/api';
import https from '../../utils/https';
import { Table } from 'antd';

interface ArticleBaseInfo {
  _id: string,
  href: string,
  title: string,
  image: string,
  description: string,
  favorite_sum: number,
  like_sum: number,
  comment_sum: number,
}

const ArticleManager: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticleList();
  }, []);

  const getArticleList = () => {
    https.get(api.getList).then((res: any) => {
      const newArticleList = res.data.map((item: any) => ({
        id: item._id,
        title: item.title,
        image: item.image,
        description: item.desc,
        content: item.content,
        favorite_sum: item.favorite_sum,
        like_sum: item.like_sum,
        comment_sum: item.comment_sum,
      }));
      setArticleList(newArticleList)
    });
  }

  const columns = [
    {
      dataIndex: 'id',
      key: '_id',
      render: () => '',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
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
    total: articleList.length,
    hideOnSinglePage: true,
    showQuickJumper: true,
    showSizeChanger: true
  }

  return (
    <div>
      <Table columns={columns} dataSource={articleList} pagination={pagination} />
    </div>
  )

  // return (
  //   <div>
  //     文章管理      
  //     {
  //       articleList.map((item: ArticleBaseInfo) => {
  //         return (
  //           <div key={item._id}>
  //             {item.title}
  //           </div>
  //         )
  //       })
  //     }
  //   </div>
  // )
}

export default ArticleManager;
