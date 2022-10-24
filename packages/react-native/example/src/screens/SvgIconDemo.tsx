import React from 'react';
import { ScrollView } from 'react-native';
import Container from '../components/Container';
import { SvgIcon } from '@td-design/react-native';

export default () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <SvgIcon name="arrowdown" color="#ff0000" />
        <SvgIcon name="bells" color="#ff0000" />
        <SvgIcon name="clockcircleo" color="#ff0000" />
        <SvgIcon name="close" color="#ff0000" />
        <SvgIcon name="closecircleo" color="#ff0000" />
        <SvgIcon name="date" color="#ff0000" />
        <SvgIcon name="down" color="#ff0000" />
        <SvgIcon name="ellipsis" color="#ff0000" />
        <SvgIcon name="eyeclose" color="#ff0000" />
        <SvgIcon name="eyeopen" color="#ff0000" />
        <SvgIcon name="left" color="#ff0000" />
        <SvgIcon name="minus" color="#ff0000" />
        <SvgIcon name="plus" color="#ff0000" />
        <SvgIcon name="radio-checked" color="#ff0000" />
        <SvgIcon name="radio-unchecked" color="#ff0000" />
        <SvgIcon name="reload" color="#ff0000" />
        <SvgIcon name="right" color="#ff0000" />
        <SvgIcon name="search" color="#ff0000" />
        <SvgIcon name="up" color="#ff0000" />
        <SvgIcon name="checkboxChecked" color="#ff0000" />
        <SvgIcon name="checkboxHalfchecked" color="#ff0000" />
        <SvgIcon name="checkboxUnchecked" color="#ff0000" />
      </ScrollView>
    </Container>
  );
};
