/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BlackBuilding = () => {
  return (
    <View style={{position: 'absolute', bottom: 0, zIndex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          height: 30,
          width: 40,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <View style={{backgroundColor: '#2f2d30', height: 10, width: 60}} />
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#3a393d', width: 10, height: 20}} />
        <View style={{backgroundColor: '#434145', width: 50, height: 20}} />
        <View style={{backgroundColor: '#3a393d', width: 30, height: 20}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#3a393d', width: 20, height: 20}} />
        <View style={{backgroundColor: '#434145', width: 60, height: 20}} />
        <View style={{backgroundColor: '#3a393d', width: 30, height: 20}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#3a393d', width: 40, height: 20}} />
        <View style={{backgroundColor: '#434145', width: 70, height: 20}} />
        <View style={{backgroundColor: '#3a393d', width: 30, height: 20}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#3a393d', width: 60, height: 20}} />
        <View style={{backgroundColor: '#434145', width: 70, height: 20}} />
        <View style={{backgroundColor: '#3a393d', width: 30, height: 20}} />
      </View>
      <View style={{flexDirection: 'row', height: 500}}>
        <View style={{backgroundColor: '#39383A', width: 40}} />
        <View style={{backgroundColor: '#rgb(78,107,132)', width: 60}}>
          {[...Array(90)].map(item => {
            return (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: 'black',
                  marginBottom: 5,
                }}
              />
            );
          })}
          <View
            style={[
              StyleSheet.absoluteFillObject,
              {
                flexDirection: 'row',
              },
            ]}>
            {[...Array(10)].map(item => {
              return (
                <View
                  style={{
                    height: '100%',
                    width: 1,
                    backgroundColor: 'black',
                    marginRight: 5,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(67,65,69)', width: 10}} />
        <View style={{flexDirection: 'row', height: 500}}>
          <View style={{backgroundColor: '#rgb(78,107,132)', width: 50}}>
            {[...Array(90)].map(item => {
              return (
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: 'black',
                    marginBottom: 5,
                    transform: [{rotateZ: '-6deg'}],
                  }}
                />
              );
            })}
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  flexDirection: 'row',
                },
              ]}>
              {[...Array(8)].map(item => {
                return (
                  <View
                    style={{
                      height: '100%',
                      width: 1,
                      backgroundColor: 'black',
                      marginRight: 5,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
