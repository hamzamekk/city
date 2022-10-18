/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Metro, Road} from './Components';

export default () => {
  return (
    <View style={{flex: 1}}>
      <Road />
      <Metro />
    </View>
  );
};
