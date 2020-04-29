/** !
 * @description: 栏目组件
 * @author: zpl
 * @Date: 2020-02-25 20:00:39
 * @LastEditTime: 2020-03-05 17:30:06
 * @LastEditors: zpl
 */
import React, {useEffect} from 'react';
import {Collapse, Empty, Button, Icon, Row, Col} from 'antd';

import ChannelProps from '../channel.interfice';
import './index.less';

const {Panel} = Collapse;

/**
 * 折叠面板二次封装，openState为default时不控制展开状态
 *
 * @param {*} props
 * @return {void}
 */
const CurrentCollapse: React.SFC<{
  openState: string;
  activeKey: string[]|string| number[]|number;
}> = (props) => {
  const {
    openState,
    activeKey,
    children,
  } = props;

  if (openState === 'default') {
    return <Collapse>{children}</Collapse>;
  }
  return <Collapse activeKey={openState==='open' ? activeKey : ''}>{children}</Collapse>;
};

/**
 * 封装面板
 *
 * @param {*} props
 * @return {void}
 */
const Channel: React.SFC<{
  id: string;
  list: ChannelProps[];
  openState: 'open'|'close'|'default';
  setOpenState: Function;
}> = (props) => {
  const {
    list = [],
    openState,
    setOpenState,
  } = props;

  useEffect(() => {
    setOpenState('default');
  }, [openState]);

  if (list.length) {
    const childrenKeys = list.map((channel) => channel.id);

    return (
      <div>
        <CurrentCollapse
          activeKey={childrenKeys}
          openState={openState}
        >
          {
            list.map((channel: ChannelProps) => {
              const {
                id,
                title,
                desc = '',
                level,
                children = [],
              } = channel;

              // 标题
              const PanelHeader = (
                <div>
                  {title}
                  <span className="desc">{desc}</span>
                </div>
              );

              if (children.length) {
                return (
                  <Panel
                    key={id}
                    header={PanelHeader}
                    showArrow={children.length > 0}
                    className={`channel-${level}`}
                  >
                    {children.length ? <Channel
                      id={id}
                      list={children}
                      openState={openState}
                      setOpenState={setOpenState}
                    /> : ''}
                  </Panel>
                );
              } else {
                return (
                  <div key={id} className={`ant-collapse-item channel-${level}`}>
                    <div className="ant-collapse-header">{PanelHeader}</div>
                  </div>
                );
              }
            })
          }
        </CurrentCollapse>
        <Row type="flex" justify="end">
          <Col>
            <Button type="link"><Icon type="plus" />新增栏目</Button>
          </Col>
        </Row>
      </div>
    );
  }
  return <Empty />;
};

export default Channel;
