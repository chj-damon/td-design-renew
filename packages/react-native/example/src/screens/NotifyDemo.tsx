import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Notify } from '@td-design/react-native';
import Container from '../components/Container';

export default () => {
  const keyRef = useRef<number>(-1);

  return (
    <Container>
      {/* <Button title="success" onPress={() => (keyRef.current = Notify.success({ content: '购买成功' }))} /> */}
      <Button title="fail" onPress={() => (keyRef.current = Notify.fail({ content: '对不起，操作失败' }))} />
      {/* <Button title="info" onPress={() => (keyRef.current = Notify.info({ content: '提示内容333333333' }))} /> */}
    </Container>
  );
};
