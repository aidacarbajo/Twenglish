import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import Apuntes from '../screens/Apuntes';
import Ejercicios from '../screens/Ejercicios';
import TabNavigator from '../config/TabNavigator';
import Resumen from '../screens/Resumen';
import PreTest from '../screens/PreTest';

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
  {
    nombre: "Resumen",
    componente: Resumen
  }
];


const MainNavigator = () => {
  if(global.firstTime && pantallas[0].nombre != 'PreTest') {
    // Meter en primera posicion
    pantallas.unshift({
      nombre: "PreTest",
      componente: PreTest
    });
  }

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