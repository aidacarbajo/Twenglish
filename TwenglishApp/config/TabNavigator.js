import React from 'react';
import { icons } from '../assets/theme/styles';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabMenu from '../components/Menus/TabMenu';
import Lecciones from '../screens/Lecciones';
import Routine from '../screens/Routine';

const Tab = createBottomTabNavigator();

const Navigation = (props) => {

  let initialRoute = "Lessons";

  return (
      <Tab.Navigator
      initialRouteName={initialRoute}
      tabBar={({ state, descriptors, navigation }) =>
        <TabMenu
          state={state}
          descriptors={descriptors}
          navigation={navigation}
          style={icons.menu}
        />
      }
    >
      
      <Tab.Screen 
          name={"Lessons"} 
          children={() => <Lecciones test={props.route.params != undefined ? props.route.params.test : null} />}
      /> 
      <Tab.Screen name={"Routine"} component={Routine}/> 

    </Tab.Navigator>
  );
};

export default Navigation;