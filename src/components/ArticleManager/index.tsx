/**!
 * @description: 文章管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-01-18 18:41:22
 * @LastEditors: zpl
 */
import React, { useState, useEffect } from 'react'

import api from '../../common/api';
import https from '../../utils/https';

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

interface Props {}

const ArticleManager: React.FC = (props: Props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    // getArticleList();
  }, []);

  const getArticleList = () => {
    https.get(api.getList).then((res: any) => {
      const newArticleList = res.data.map((item: any) => ({
        id: item._id,
        href: 'http://www.baidu.com',
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

  return (
    <div>
      文章管理      
      {
        articleList.map((item: ArticleBaseInfo) => {
          return (
            <div key={item._id}>
              {item.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default ArticleManager;
