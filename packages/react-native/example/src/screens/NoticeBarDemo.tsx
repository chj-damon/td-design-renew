import React from 'react';
import { NoticeBar, WhiteSpace } from '@td-design/react-native';
import Container from '../components/Container';
import { Alert, ScrollView } from 'react-native';
import { ScreenProps } from '../common';

export default function NoticeBarDemo({ navigation }: ScreenProps) {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <NoticeBar text="我是通知我是通知我是通知我是通知我是通知我是通知22222" />
        <NoticeBar text="我是通知我是通知我是通知我是通知我是通知我是通知" mode="close" />
        <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知"
          mode="link"
          onPress={() => navigation.navigate('BoxDemo')}
        />
        <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知33333"
          mode="link"
          onPress={() => navigation.navigate('BoxDemo')}
          animation
        />
        <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知44444"
          mode="close"
          animation
          onClose={() => Alert.alert('hello')}
        />
      </ScrollView>
    </Container>
  );
}
