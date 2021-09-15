import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabMenu from '../components/Menus/TabMenu';
import { createStackNavigator } from '@react-navigation/stack';
import Lecciones from '../screens/Lecciones';
import Rutine from '../screens/Rutine';
import Settings from '../screens/Settings';

import { icons } from '../assets/theme/styles';
import Apuntes from '../screens/Apuntes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const options = {
  tabBarVisible: false
}

const Footer = () => {
  return(
    <Tab.Navigator
      initialRouteName="Lessons"
      tabBar={({ state, descriptors, navigation }) =>
        <TabMenu
          state={state}
          descriptors={descriptors}
          navigation={navigation}
          style={icons.menu}
        />
      }
    >
      <Tab.Screen name="Lessons" component={Lecciones} />
      <Tab.Screen name="Routine" component={Rutine} />

      <Tab.Screen name="Settings" component={Settings} options={options}/> 
      <Tab.Screen name="Apuntes" component={Apuntes} options={options}/> 


    </Tab.Navigator>
  );
}


const Navigation = () => {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      {Footer()}
      {/* {General()} */}
    </NavigationContainer>
  );
};

export default Navigation;