import React from 'react';
import Advertise from './advertise';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {

  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Advertise} />
      </Stack.Navigator>       
    }</NavigationContainer>

  );
  
}
