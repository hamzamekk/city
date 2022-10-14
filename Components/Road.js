/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';

export const Road = () => {
  return (
    <View style={{width: '100%'}}>
      <View style={{height: 10, backgroundColor: '#6E6E6E'}} />
      <View style={{backgroundColor: '#585758', height: 7}} />
      <View
        style={{
          backgroundColor: '#32323B',
          height: 40,
          justifyContent: 'space-evenly',
        }}>
        <View style={{flexDirection: 'row'}}>
          {[...Array(100).keys()].map(item => (
            <Car
              bg={'#827A77'}
              duration={9000}
              key={item}
              delay={item * 100}
              itemsNumber={100}
            />
          ))}
        </View>
        <View style={{flexDirection: 'row'}}>
          {[...Array(100).keys()].map(item => (
            <Car
              bg={'#626D67'}
              duration={10000}
              key={item}
              delay={item * 200}
              itemsNumber={100}
            />
          ))}
        </View>
        <View style={{flexDirection: 'row'}}>
          {[...Array(100).keys()].map(item => (
            <Car
              bg={'#53474A'}
              duration={12000}
              key={item}
              delay={item * 300}
              itemsNumber={100}
            />
          ))}
        </View>
      </View>
      <View style={{height: 5, backgroundColor: '#6E6E6E'}} />
    </View>
  );
};

const Car = ({bg, duration, delay, itemsNumber}) => {
  const translateX = useRef(new Animated.Value(-1000)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          delay,
          toValue: 1000,
          duration,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
      Animated.delay(itemsNumber * duration),
    ).start();
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: bg,
          height: 8,
          width: Math.random() * 20,
        },
        {
          transform: [{translateX}],
        },
      ]}
    />
  );
};
