import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import TabMenu from '../components/Menus/TabMenu';
import Lecciones from '../screens/Lecciones';
import Settings from '../screens/Settings';
import Rutine from '../screens/Rutine';
import Ejemplos from '../screens/Ejemplos';
import { icons } from '../assets/theme/styles';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
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
        {/* <Tab.Screen name="Three" component={SettingsCopy} />
        <Tab.Screen name="Four" component={Ejemplos} /> */}

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;