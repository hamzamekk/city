/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      <LinearGradient
        colors={['#2D81DA', '#7CB9DE']}
        style={StyleSheet.absoluteFillObject}
      />
      <BigBuilding />
      <BlackBuilding />
      <Metro />
      <Road />
      <BackgroundBuildings />
    </View>
  );
};
