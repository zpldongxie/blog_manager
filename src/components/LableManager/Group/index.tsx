import React, { useState, useEffect, SFC } from "react";
import { Card, Tooltip, Tag, Input, Icon, Dropdown, Menu } from 'antd';

import { showError, showDeleteConfirm } from '../../Util'
import https from '../../../utils/https';

import './index.less';

interface Item {
  _id: string,
  name: string,
  color?: string
}

interface IProps {
  title: string,
  style?: any,
  /**
   * 获取列表接口
   */
  getAllUrl: string,
  /**
   * 新增接口
   */
  addUrl: string,
  /**
   * 删除单个接口
   */
  delOneUrl: string,
  /**
   * 修改名称接口
   */
  changeNameUrl: string,
  /**
   * 修改颜色接口
   */
  changeColorUrl: string
}

/**
 * 标签操作下拉菜单
 *
 * @param {*} props
 * @returns
 */
const DropdownMenu: SFC<{ title?: string, len?: number, clickHandler: Function }> = props => {
  const {
    title = '',
    len = 10,
    clickHandler
  } = props;
  const lable = title.length > len ? `${title.slice(0, len)}...` : title;
  return (
    <Menu onClick={({ key }) => { clickHandler(key) }}>
      <Menu.Item key="default"><Tag color=''>{lable}</Tag></Menu.Item>
      <Menu.Item key="magenta"><Tag color='magenta'>{lable}</Tag></Menu.Item>
      <Menu.Item key="red"><Tag color='red'>{lable}</Tag></Menu.Item>
      <Menu.Item key="volcano"><Tag color='volcano'>{lable}</Tag></Menu.Item>
      <Menu.Item key="orange"><Tag color='orange'>{lable}</Tag></Menu.Item>
      <Menu.Item key="gold"><Tag color='gold'>{lable}</Tag></Menu.Item>
      <Menu.Item key="lime"><Tag color='lime'>{lable}</Tag></Menu.Item>
      <Menu.Item key="green"><Tag color='green'>{lable}</Tag></Menu.Item>
      <Menu.Item key="cyan"><Tag color='cyan'>{lable}</Tag></Menu.Item>
      <Menu.Item key="blue"><Tag color='blue'>{lable}</Tag></Menu.Item>
      <Menu.Item key="geekblue"><Tag color='geekblue'>{lable}</Tag></Menu.Item>
      <Menu.Item key="purple"><Tag color='purple'>{lable}</Tag></Menu.Item>
      <Menu.Divider />
      <Menu.Item key="edit">编辑</Menu.Item>
    </Menu>
  )
};

/**
 * 分组显示标签
 *
 * @param {*} props
 * @returns
 */
const Group: React.SFC<IProps> = props => {
  const {
    title,
    style = {},
    getAllUrl,
    addUrl,
    delOneUrl,
    changeNameUrl,
    changeColorUrl
  } = props;

  const [list, setList] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdowVisibleId, setDropdowVisibleId] = useState('');
  const [editInputValue, setEditInputValue] = useState('');
  const [editId, setEditId] = useState('');

  // 用来绑定新建输入框Dom
  let inputDom: any;
  // 用来绑定编辑输入框Dom
  let editInputDom: any;

  /**
   * 获取列表并显示
   *
   */
  const getList = () => {
    https.get(getAllUrl).then((res) => {
      if (res.status === 200) {
        setList(res.data);
      } else {
        showError(`${title}数据获取失败。`);
      }
    });
  }

  /**
   * 删除单个
   *
   * @param {string} id
   */
  const handleDel = (id: string) => {
    showDeleteConfirm({
      okAction: () => {
        https.delete(`${delOneUrl}/${id}`).then((res) => {
          if (res.status === 200) {
            getList();
          } else {
            showError(`${title}数据获取失败。`);
          }
        });
      }
    });
  };

  /**
   * 绑定input Dom
   *
   * @param {*} input
   */
  const saveInputRef = (input: any) => (inputDom = input);

  /**
   * 类型新增输入框填值
   *
   * @param {*} e
   */
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  /**
   * 类型输入框提交
   *
   */
  const handleInputConfirm = () => {
    if (inputValue && list.every((type: Item) => type.name !== inputValue)) {
      https.post(addUrl, { name: inputValue, color: '' }).then((res: any) => {
        if (res.status === 201) {
          getList();
        } else {
          showError(`新增失败。`);
        }
      }).catch(err => {
        showError(`新增失败。${JSON.stringify(err.response.data.message[0].constraints)}`)
      });
    }
    setInputVisible(false);
    setInputValue('');
  };

  /**
   * 绑定编辑input Dom
   *
   * @param {*} input
   */
  const saveEditInputRef = (input: any) => (editInputDom = input);

  /**
   * 类型编辑输入框填值
   *
   * @param {*} e
   */
  const handleEditInputChange = (e: any) => {
    setEditInputValue(e.target.value);
  };

  /**
   * 类型编辑输入框提交
   *
   */
  const handleEditInputConfirm = () => {
    if (editInputValue && list.every((type: Item) => type.name !== editInputValue)) {
      https.put(changeNameUrl, { _id: editId, name: editInputValue }).then(res => {
        if (res.status === 200) {
          getList();
        } else {
          showError('修改失败。');
        }
      })
    }
    setEditId('');
    setEditInputValue('');
  };

  /**
   * 修改标签名称或颜色
   *
   * @param {string} id
   * @param {string} name
   * @param {string} color
   */
  const update = (id: string, name: string, color: string) => {
    if (color === 'edit') {
      setEditInputValue(name);
      setEditId(id);
    } else {
      https.put(changeColorUrl, { _id: id, color: color === 'default' ? '' : color }).then(res => {
        if (res.status === 200) {
          getList();
        } else {
          showError('修改颜色失败。');
        }
      })
    }
  }

  useEffect(() => {
    https.get(getAllUrl).then((res) => {
      if (res.status === 200)
        setList(res.data);
    });
  }, [getAllUrl]);

  // input显示时，使其获取焦点
  useEffect(() => {
    if (inputVisible && inputDom) {
      inputDom.focus();
    }
  }, [inputDom, inputVisible]);

  useEffect(() => {
    if (editId !== '' && editInputDom) {
      editInputDom.focus();
    }
  }, [editId, editInputDom]);

  return (
    <Card title={title} style={style} className='listCon'>
      {
        list.map((item: Item) => {
          const isLongTag = item.name.length > 10;
          const tagElem = (
            <Dropdown
              key={item._id}
              overlay={
                <DropdownMenu
                  title={item.name}
                  len={10}
                  clickHandler={(color: string) => { update(item._id, item.name, color); setDropdowVisibleId(''); }}
                />
              }
              placement="bottomCenter"
              trigger={['click']}
              onVisibleChange={(flag) => { setDropdowVisibleId(flag ? item._id : '') }}
              visible={dropdowVisibleId === item._id && editId === ''}
            >
              <Tag
                closable
                color={item.color ? item.color : ''}
                onClose={(e: any) => { e.preventDefault(); handleDel(item._id) }}
              >
                {isLongTag ? `${item.name.slice(0, 10)}...` : item.name}
                {editId === item._id && (
                  <Input
                    ref={saveEditInputRef}
                    type="text"
                    size="small"
                    value={editInputValue}
                    onChange={handleEditInputChange}
                    onBlur={handleEditInputConfirm}
                    onPressEnter={handleEditInputConfirm}
                  />
                )}
              </Tag>
            </Dropdown>
          );
          return isLongTag ? (
            <Tooltip title={item.name} key={item._id}>
              {tagElem}
            </Tooltip>
          ) : (
              tagElem
            );
        })
      }
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={() => { setInputVisible(true) }} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> New Tag
          </Tag>
      )}
    </Card>
  )
}

export default Group;