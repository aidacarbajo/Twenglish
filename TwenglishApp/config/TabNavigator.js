import React from 'react';
import { icons } from '../assets/theme/styles';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabMenu from '../components/Menus/TabMenu';
import Lecciones from '../screens/Lecciones';
import Rutine from '../screens/Rutine';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
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
      <Tab.Screen name={"Lessons"} component={Lecciones}/> 
      <Tab.Screen name={"Routine"} component={Rutine}/> 

    </Tab.Navigator>
  );
};

export default Navigation;