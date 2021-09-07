import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lecciones from '../screens/Lecciones';
import Settings from '../screens/Settings';

const MainStack = createStackNavigator();

const MainStackScreen = () => (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Lecciones" component={Lecciones}></MainStack.Screen>
      <MainStack.Screen name="Settings" component={Settings}></MainStack.Screen>
    </MainStack.Navigator>
);

export default () => 
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
