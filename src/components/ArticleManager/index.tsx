/**!
 * @description: 文章管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-01-17 16:04:31
 * @LastEditors: zpl
 */
import React, { useState, useEffect } from 'react'

interface Props {}
interface State {}

const ArticleManager: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
  });

  return (
    <div>
      文章管理
    </div>
  )
}

export default ArticleManager;
