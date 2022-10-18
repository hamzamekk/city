/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {
  BackgroundBuildings,
  BigBuilding,
  BlackBuilding,
  Metro,
  Road,
} from './Components';

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: 'cyan'}}>
      <BigBuilding />

      <BlackBuilding />
      <Metro />
      <Road />
      <BackgroundBuildings />
    </View>
  );
};
