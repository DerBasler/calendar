import React, { useState } from 'react';
import {Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';

export default function PageTwo(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();
  const myStart = new Date();
  myStart.setDate(22);
  // + 1 day and end of day
  const myEnd = new Date();
  myEnd.setDate(23);
  myEnd.setHours(23, 59, 59, 999);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Page Cal</Text>
      <DatePickerModal
        startDate={myStart}
        endDate={myEnd}
        visible={visible}
        locale="de"
        mode="range"
        onConfirm={() => {setVisible(false);}}
        onDismiss={() => {setVisible(false);}}
      />
      <Button onPress={() => setVisible(true)}>Open Calendar</Button>

      <Button onPress={() => navigation.navigate('PageOne')}>PageOne</Button>
      <Button onPress={() => navigation.navigate('PageTwo')}>PageTwo</Button>
      <Button onPress={() => navigation.navigate('PageCal')}>PageCal</Button>
    </View>
  );
}
