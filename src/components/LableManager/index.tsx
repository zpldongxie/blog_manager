/**!
 * @description: 分类/标签管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-01-16 13:28:45
 * @LastEditors: zpl
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

interface Props {}
interface State {}

export default class LableManager extends Component<Props, State> {
  render() {
    return (
      <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      分类 / 标签管理
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      分类 / 标签管理
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      分类 / 标签管理
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      分类 / 标签管理
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      分类 / 标签管理
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      分类 / 标签管理
      </Col>
    </Row>
    )
  }
}
