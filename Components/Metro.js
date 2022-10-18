/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {Text, View, Dimensions, Animated, Easing} from 'react-native';

// 472F2C
// 362627

const {width} = Dimensions.get('screen');

export const Metro = () => {
  return (
    <View style={{width, position: 'absolute', bottom: 450, zIndex: 2}}>
      <MetroTrain />
      <Building />
    </View>
  );
};

const Building = () => {
  return (
    <View style={{alignItems: 'flex-end', position: 'absolute', right: 0}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#6A4641', height: 15, width: 100}} />
        <View style={{backgroundColor: '#362627', height: 15, width: 15}} />
      </View>
      <View style={{backgroundColor: '#6A4641', height: 20, width: 130}} />
      <View
        style={{
          backgroundColor: '#6A4641',
          width: 130,
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <View style={{backgroundColor: '#362627', width: 5}} />
        <View style={{backgroundColor: '#553934', width: 40}}>
          {[...Array(20).keys()].map(item => (
            <View
              key={item}
              style={{
                height: 1,
                backgroundColor: '#362627',
                marginVertical: 2.5,
              }}
            />
          ))}
        </View>
        <View style={{backgroundColor: '#362627', width: 5}} />
        <View style={{backgroundColor: '#553934', width: 60}}>
          {[...Array(20).keys()].map(item => (
            <View
              key={item}
              style={{
                height: 1,
                backgroundColor: '#362627',
                marginVertical: 2.5,
              }}
            />
          ))}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#6A4641', height: 20, width: 115}} />
        <View style={{backgroundColor: '#362627', height: 20, width: 20}} />
      </View>
      <View
        style={{
          backgroundColor: '#6A4641',
          width: 130,
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <View style={{backgroundColor: '#362627', width: 5}} />
        <View style={{backgroundColor: '#553934', width: 40}}>
          {[...Array(3).keys()].map(item => (
            <View
              key={item}
              style={{
                height: 1,
                backgroundColor: '#362627',
                marginVertical: 2.5,
              }}
            />
          ))}
        </View>
        <View style={{backgroundColor: '#362627', width: 5}} />
        <View style={{backgroundColor: '#553934', width: 60}}>
          {[...Array(3).keys()].map(item => (
            <View
              key={item}
              style={{
                height: 1,
                backgroundColor: '#362627',
                marginVertical: 2.5,
              }}
            />
          ))}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#6A4641', height: 20, width: 115}} />
        <View style={{backgroundColor: '#362627', height: 20, width: 20}} />
        <View style={{backgroundColor: '#6A4641', height: 20, width: 2.5}} />
      </View>
      <View
        style={{
          backgroundColor: '#6A4641',
          width: 130,
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <View style={{backgroundColor: '#362627', width: 5}} />
        <View style={{backgroundColor: '#553934', width: 40}}>
          {[...Array(5).keys()].map(item => (
            <View
              key={item}
              style={{
                height: 1,
                backgroundColor: '#362627',
                marginVertical: 2.5,
              }}
            />
          ))}
        </View>
        <View style={{backgroundColor: '#362627', width: 5}} />
        <View style={{backgroundColor: '#553934', width: 60}}>
          {[...Array(5).keys()].map(item => (
            <View
              key={item}
              style={{
                height: 1,
                backgroundColor: '#362627',
                marginVertical: 2.5,
              }}
            />
          ))}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: '#6A4641', height: 20, width: 120}} />
        <View style={{backgroundColor: '#362627', height: 20, width: 20}} />
        <View style={{backgroundColor: '#6A4641', height: 20, width: 2.5}} />
      </View>
      <View
        style={{
          backgroundColor: '#6A4641',
          width: 130,
          paddingHorizontal: 10,
        }}>
        <View style={{backgroundColor: '#472F2B', flexDirection: 'row'}}>
          <View style={{backgroundColor: '#362627', height: 50, width: 5}} />
          <View
            style={{
              height: 3,
              width: 110,
              backgroundColor: '#382827',
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#6A4641',
          width: 130,
          paddingHorizontal: 10,
        }}>
        <View style={{backgroundColor: '#362627', height: 50, width: 110}} />
      </View>
      <View style={{height: 20, backgroundColor: '#6A4641', width: 130}} />
    </View>
  );
};

const MetroTrain = () => {
  const translateX = useRef(new Animated.Value(-width)).current;
  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: width,
          duration: 10000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(translateX, {
          toValue: -width,
          duration: 10000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View
      style={{
        transform: [{rotateZ: '-5deg'}],
        position: 'absolute',
        top: 150,
        left: -10,
      }}>
      <View>
        <Animated.View
          style={[
            {flexDirection: 'row', alignItems: 'center'},
            {transform: [{translateX}]},
          ]}>
          <View
            style={{
              backgroundColor: '#92A0A7',
              height: 20,
              width: 40,
              borderTopLeftRadius: 20,
            }}
          />
          <View
            style={{
              backgroundColor: '#92A0A7',
              height: 20,
              width: 40,
              marginHorizontal: 5,
            }}
          />
          <View
            style={{
              backgroundColor: '#92A0A7',
              height: 20,
              width: 40,
              borderTopRightRadius: 20,
            }}
          />
        </Animated.View>
      </View>
      <View
        style={{
          backgroundColor: '#2f3d41',
          width: width * 1.5,
          height: 25,
          justifyContent: 'flex-end',
        }}>
        <View style={{flexDirection: 'row'}}>
          {[...Array(20).keys()].map(item => {
            return (
              <View
                key={item}
                style={{
                  backgroundColor: '#20292b',
                  height: 15,
                  width: 10,
                  marginRight: 10,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
