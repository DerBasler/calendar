/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function AnimatedComponent(): React.JSX.Element {

  const collapsed = true;

  const calendarOpacity = useRef<Animated.Value>(
    new Animated.Value(collapsed ? 1 : 0)
  )

  useEffect(() => {
    Animated.timing(calendarOpacity.current, {
      toValue: collapsed ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [collapsed])

  return (
    <View style={styles.root}>
      <Animated.View
        pointerEvents={collapsed ? 'auto' : 'none'}
        style={[
          styles.root,
          {
            opacity: calendarOpacity.current,
            transform: [
              {
                scaleY: calendarOpacity.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
              {
                scaleX: calendarOpacity.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1],
                }),
              },
            ],
          },
        ]}
      >
        <Text>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      </Animated.View>
      <Animated.View
        pointerEvents={collapsed ? 'none' : 'auto'}
        style={[
          styles.calendarEdit,
          {
            backgroundColor: 'orange',
            opacity: calendarOpacity.current.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            transform: [
              {
                scale: calendarOpacity.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.95],
                }),
              },
            ],
          },
        ]}
      >
        <Text>asdf</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  calendarEdit: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  opacity0: {
    opacity: 0,
  },
  opacity1: {
    opacity: 1,
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  root: {
    flex: 1,
    backgroundColor: 'white'
  },  
})

export default AnimatedComponent;
