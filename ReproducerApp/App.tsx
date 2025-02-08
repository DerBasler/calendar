/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text, View
} from 'react-native';

import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import { Button } from 'react-native-paper';
import PageCal from './PageCal';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('PageOne')}>
      PageOne
      </Button>
      <Button onPress={() => navigation.navigate('PageTwo')}>
      PageTwo
      </Button>
      <Button onPress={() => navigation.navigate('PageCal')}>
      PageCal
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    PageOne: PageOne,
    PageTwo: PageTwo,
    PageCal: PageCal,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  // return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
  //   <Text style={{color: 'orange'}}>asdf</Text>
  // </View>
  return <Navigation />;
}


export default App;
