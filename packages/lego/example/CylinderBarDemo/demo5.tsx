import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CylinderBar } from '@td-design/lego';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>弹窗</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={650}
        bodyStyle={{ backgroundColor: '#040727' }}
      >
        <CylinderBar
          inModal
          xAxisData={['01月', '02月']}
          seriesData={[
            { name: '月高速车辆总数', data: [2012, 555], unit: '万辆' },
            { name: '月空车数量', data: [1222, 1333], unit: '万辆' },
          ]}
          style={{ height: 500 }}
        />
      </Modal>
    </>
  );
};
