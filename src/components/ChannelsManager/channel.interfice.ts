/*
 * @description: 栏目属性定义
 * @author: zpl
 * @Date: 2020-02-25 20:15:27
 * @LastEditTime: 2020-03-04 14:22:59
 * @LastEditors: zpl
 */
interface ChannelProps {
  id: string;
  /**
   * 标题
   *
   * @type {string}
   * @memberof Props
   */
  title: string;
  /**
   * 描述
   *
   * @type {string}
   * @memberof Props
   */
  desc?: string;
  /**
   * 层级
   *
   * @type {number}
   * @memberof Props
   */
  level: number;
  /**
   * 子栏目
   *
   * @type {ChannelProps[]}
   * @memberof ChannelProps
   */
  children: ChannelProps[];
}

export default ChannelProps;
