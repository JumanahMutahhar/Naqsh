// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
// import {tabs} from './navigation/tab'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      {
        <Tabs/>  
      }
      
    </NavigationContainer>

  );
};

export default App;