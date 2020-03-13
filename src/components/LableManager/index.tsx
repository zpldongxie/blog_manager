/** !
 * @description: 分类/标签管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-03-05 12:11:27
 * @LastEditors: zpl
 */
import React from 'react';
import api from '../../common/api';

import Group from './Group';

const LableManager: React.FC = () => {
  return (
    <div>
      <Group
        title='分类'
        style={{marginTop: '1rem'}}
        getAllUrl={api.getAllTypes}
        addUrl={api.addType}
        delOneUrl={api.delOneType}
        changeNameUrl={api.changeTypeNameUrl}
        changeColorUrl={api.changeTypeColorUrl}
      />
      <Group
        title='标签'
        getAllUrl={api.getAllLables}
        addUrl={api.addLable}
        delOneUrl={api.delOneLable}
        changeNameUrl={api.changeLableNameUrl}
        changeColorUrl={api.changeLableColorUrl}
      />
    </div>
  );
};

export default LableManager;
