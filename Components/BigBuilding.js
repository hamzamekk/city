/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
import {useEffect} from 'react';

export const BigBuilding = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const bg = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'yellow'],
  });

  return (
    <View
      style={{
        position: 'absolute',
        top: 90,
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          height: 10,
          width: 10,
          borderRadius: 10,
          backgroundColor: bg,
        }}
      />
      <View style={{height: 30, width: 3, backgroundColor: 'black'}} />
      <View
        style={{
          height: 20,
          width: 100,
          backgroundColor: '#D2DADD',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <View
        style={{
          height: 20,
          width: 120,
          backgroundColor: '#D2DADD',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          height: 20,
          width: 130,
          backgroundColor: '#D2DADD',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          backgroundColor: '#D2DADD',
          flexDirection: 'row',
          paddingVertical: 5,
          paddingHorizontal: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        {[...Array(5).keys()].map(item => (
          <View
            key={item}
            style={{
              height: 50,
              width: 30,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginHorizontal: 2,
              backgroundColor: '#C0C5AC',
            }}>
            <View
              style={{
                height: 40,
                width: '80%',
                backgroundColor: '#C5CBC6',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
        ))}
      </View>
      <View
        style={{
          backgroundColor: '#D2DADD',
          flexDirection: 'row',
          paddingVertical: 5,
          paddingHorizontal: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        {[...Array(6).keys()].map(item => (
          <View
            key={item}
            style={{
              height: 50,
              width: 30,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginHorizontal: 2,
              backgroundColor: '#C0C5AC',
            }}>
            <View
              style={{
                height: 40,
                width: '80%',
                backgroundColor: '#C5CBC6',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
        ))}
      </View>
      <View
        style={{
          backgroundColor: '#D2DADD',
          flexDirection: 'row',
          paddingVertical: 5,
          paddingHorizontal: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        {[...Array(7).keys()].map(item => (
          <View
            key={item}
            style={{
              height: 50,
              width: 30,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginHorizontal: 2,
              backgroundColor: '#C0C5AC',
            }}>
            <View
              style={{
                height: 40,
                width: '80%',
                backgroundColor: '#C5CBC6',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
        ))}
      </View>
      <View
        style={{
          backgroundColor: '#D2DADD',
          flexDirection: 'row',
          paddingVertical: 5,
          paddingHorizontal: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        {[...Array(10).keys()].map(item => (
          <View
            key={item}
            style={{
              height: 50,
              width: 30,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginHorizontal: 2,
              backgroundColor: '#C0C5AC',
            }}>
            <View
              style={{
                height: 40,
                width: '80%',
                backgroundColor: '#C5CBC6',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
