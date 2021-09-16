import React from 'react';
import { icons } from '../assets/theme/styles';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabMenu from '../components/Menus/TabMenu';
import Lecciones from '../screens/Lecciones';
import Rutine from '../screens/Rutine';
import Settings from '../screens/Settings';
import Apuntes from '../screens/Apuntes';
import Voc_Ex1 from '../screens/Voc_Ex1';

const Tab = createBottomTabNavigator();

const pantallas = [
  {
    nombre: "Lessons",
    componente: Lecciones,
    tabBarVisible: true
  },
  {
    nombre: "Routine",
    componente: Rutine,
    tabBarVisible: true
  },
  {
    nombre: "Settings",
    componente: Settings,
    tabBarVisible: true
  },
  {
    nombre: "Voc_Ex1",
    componente: Voc_Ex1,
    tabBarVisible: false
  },
  {
    nombre: "Apuntes",
    componente: Apuntes,
    tabBarVisible: false
  },
];

const Navigation = () => {
  return (
    <NavigationContainer screenOptions={{headerShown: false}} >
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
      {
        pantallas.map(pantalla => {
          return(
            <Tab.Screen name={pantalla.nombre} component={pantalla.componente} options={{tabBarVisible: pantalla.tabBarVisible}} key={pantalla.nombre}/> 
          );
        })
      }    
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;