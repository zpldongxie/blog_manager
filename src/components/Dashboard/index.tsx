/**!
 * @description: 仪表盘
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-02-17 21:29:12
 * @LastEditors: zpl
 */
import React from 'react';
import { Row, Col } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

import './index.less'

import { interval, pie, point } from './testData';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <Chart height={400} data={interval.data} scale={interval.cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="top" />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </Col>
        <Col className="gutter-row" span={12}>
          <Chart
            height={400}
            data={pie.data}
            scale={pie.cols}
            padding="auto"
            forceFit
            onGetG2Instance={(chart) => {
              // 饼图绘制多次会导致setSelected处理不生效，延时hack一下fixed
              setTimeout(() => {
                // 设置默认选中
                const items = chart.get('data'); // 获取图形对应的数据
                console.log(JSON.stringify(items));
                // geom.setSelected(items[1]);
              }, 2000);
            }} // 设置选中
            onPlotClick={(ev) => {
              console.log(ev);
            }}
          >
            <Coord type="theta" radius={0.65} />
            <Axis name="percent" />
            <Legend position="right" offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
            <Tooltip
              showTitle={false}
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                'item*percent',
                (item, percent) => {
                  percent = `${percent * 100}%`;
                  return {
                    name: item,
                    value: percent,
                  };
                },
              ]}
              style={{
                lineWidth: 1,
                stroke: '#fff',
              }}
            />
          </Chart>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Chart height={400} data={point.data} scale={point.cols} forceFit>
            <Legend />
            <Axis name="month" />
            <Axis
              name="temperature"
              label={{
                formatter: val => `${val}°C`
              }}
            />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom
              type="line"
              position="month*temperature"
              size={2}
              color={"city"}
              shape={"smooth"}
            />
            <Geom
              type="point"
              position="month*temperature"
              size={4}
              shape={"circle"}
              color={"city"}
              style={{
                stroke: "#fff",
                lineWidth: 1
              }}
            />
          </Chart>
        </Col>
      </Row>

    </div>
  )
}

export default Dashboard;
