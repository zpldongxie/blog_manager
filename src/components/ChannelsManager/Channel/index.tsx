/** !
 * @description: 栏目组件
 * @author: zpl
 * @Date: 2020-02-25 20:00:39
 * @LastEditTime: 2020-03-05 17:30:06
 * @LastEditors: zpl
 */
import React from 'react';
import {Collapse, Empty, Button, Icon, Row, Col} from 'antd';

import ChannelProps from '../channel.interfice';
import './index.less';

const {Panel} = Collapse;

const Channel: React.SFC<{ channels: ChannelProps[] }> = (props) => {
  const {channels = []} = props;

  if (channels.length) {
    return (
      <div>
        <Collapse>
          {
            channels.map((channel: ChannelProps) => {
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
                    {children.length ? <Channel channels={children} /> : ''}
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
        </Collapse>
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
