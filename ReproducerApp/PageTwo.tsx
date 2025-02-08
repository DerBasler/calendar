
import React from 'react';
import AnimatedComponent from './AnimatedComponent';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';


export default function PageTwo(): React.JSX.Element {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Text>Page 2</Text>
        <AnimatedComponent />
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
