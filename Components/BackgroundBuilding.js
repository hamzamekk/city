/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export const BackgroundBuildings = () => {
  return (
    <View style={{position: 'absolute', bottom: 100, right: 0}}>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 300,
          right: 70,
        }}>
        <View
          style={{height: 200, width: 60, backgroundColor: 'rgb(143,147,162)'}}
        />
        <View style={{height: 200, width: 20, backgroundColor: '#717585'}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 200,
          right: 20,
        }}>
        <View style={{height: 200, width: 40, backgroundColor: '#9B9FAE'}} />
        <View style={{height: 200, width: 10, backgroundColor: '#9397A6'}} />
      </View>
      <View style={{position: 'absolute', right: 170, bottom: 200}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: 10, width: 40, backgroundColor: '#8E99AA'}} />
          <View style={{height: 10, width: 20, backgroundColor: '#7B889E'}} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: 200, width: 45, backgroundColor: '#8F9BAA'}} />
          <View style={{height: 200, width: 15, backgroundColor: '#7C899D'}} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          right: 130,
          bottom: 150,
        }}>
        <View style={{backgroundColor: '#E9E9E8', height: 200, width: 100}} />
        <View style={{backgroundColor: '#AFB2B9', height: 200, width: 20}} />
      </View>
      <View
        style={{
          height: 300,
          width: 101,
          right: 129,
          bottom: -30,
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            height: 10,
            width: 50,
            backgroundColor: '#BCBA9C',
            borderTopLeftRadius: 10,
          }}
        />
        <View
          style={{
            height: 50,
            width: 80,
            backgroundColor: '#C0BDA2',
            borderTopLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#8F8C75',
              height: 35,
              width: 60,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            height: 240,
            width: 180,
            backgroundColor: '#BDBCA0',
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            {[...Array(30).keys()].map(item => {
              return (
                <View
                  key={item}
                  style={{
                    height: 220,
                    width: 4,
                    backgroundColor: '#8F8C75',
                    marginLeft: 5,
                    borderRadius: 10,
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};
