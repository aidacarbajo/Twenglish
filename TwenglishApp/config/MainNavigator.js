import React from 'react';
import { icons } from '../assets/theme/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lecciones from '../screens/Lecciones';
import Rutine from '../screens/Rutine';
import Settings from '../screens/Settings';
import Apuntes from '../screens/Apuntes';
import Ejercicios from '../screens/Ejercicios';
import TabNavigator from '../config/TabNavigator';

const Stack = createStackNavigator();

const pantallas = [
  {
    nombre: "Lecciones",
    componente: TabNavigator,
  },
  {
    nombre: "Settings",
    componente: Settings,
  },
  {
    nombre: "Ejercicios",
    componente: Ejercicios,
  },
  {
    nombre: "Apuntes",
    componente: Apuntes,
  },
];

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false
      }}
    >
      {
        pantallas.map(pantalla => {
          return(
            <Stack.Screen name={pantalla.nombre} component={pantalla.componente} key={pantalla.nombre}/> 
          );
        })
      }    
    </Stack.Navigator>
  );
};

export default MainNavigator;