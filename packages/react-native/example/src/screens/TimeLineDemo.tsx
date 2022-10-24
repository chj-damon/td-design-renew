import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Timeline, WingBlank, WhiteSpace, helpers } from '@td-design/react-native';
import Container from '../components/Container';

const { px } = helpers;
export default () => {
  const steps = [
    {
      title: '第一步',
      description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
      date: '12-12',
      time: '10:10',
    },
    { title: '第二步', description: '测试', date: '12-12', time: '10:10' },
    { title: '第三步', description: '测试', date: '12-12', time: '10:10' },
    { title: '第四步', description: '测试', date: '12-12', time: '10:10' },
  ];
  const steps1 = [
    {
      title: '第一步',
      description: '测试',
      date: '12-12',
      time: '10:10',
    },
    {
      title: '第二步',
      description: '测试',
      date: '12-12',
      time: '10:10',
      contentRender: <Text>111</Text>,
    },
    { title: '第三步', description: '测试', date: '12-12', time: '10:10', leftRender: <Text>222</Text> },
    { title: '第四步', description: '测试', date: '12-12', time: '10:10', status: 'error' },
  ];
  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <WhiteSpace />
        <WingBlank>
          <WhiteSpace />
          <Text>基本:</Text>
          <WhiteSpace />
          <Timeline steps={steps} minHeight={px(100)} />
          <WhiteSpace />
          <Text>可以滚动:</Text>
          <WhiteSpace />
          <View style={{ height: 100 }}>
            <Timeline steps={steps} />
          </View>
          <WhiteSpace />
          <Text>向下:</Text>
          <WhiteSpace />
          <Timeline steps={steps} direction="down" />
          <Text>自定义节点：</Text>
          <Timeline steps={steps1} />
        </WingBlank>
      </ScrollView>
    </Container>
  );
};
