import React from 'react';
import { TouchableOpacity, View, StatusBar } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyText from '../components/Texts/MyText';
import Flatlist from '../components/Flatlist/Flatlist';

export default ( {navigation} ) => {
 
    const array = [
    {
      id: '0',
      title: 'Greetings',
      image: 'greetingsA1',
      porcentaje: '80'
    },
    {
      id: '1',
      title: 'Routine',
      image: 'routineA1',
      porcentaje: '10'
    },
    {
      id: '2',
      title: 'Food',
      image: 'foodA1',
      porcentaje: '0'
    },
    {
      id: '3',
      title: 'Studies',
      image: 'schoolA1',
      porcentaje: '0'
    },
    {
      id: '4',
      title: 'Home',
      image: 'homeA1',
      porcentaje: '0'
    },
    {
      id: '5',
      title: 'Family',
      image: 'familyA1',
      porcentaje: '0'
    },
    {
      id: '6',
      title: 'Hobbies',
      image: 'hobbiesA1',
      porcentaje: '10'
    },
    {
      id: '7',
      title: 'Weather',
      image: 'weatherA1',
      porcentaje: '10'
    },
    {
      id: '8',
      title: 'City',
      image: 'cityA1',
      porcentaje: '10'
    },
    {
      id: '9',
      title: 'Animals',
      image: 'animalsA1',
      porcentaje: '10'
    }
    ];

    state = {
      items: array
    }
      
    return (
      <View style={view.container}>
        <StatusBar hidden />

        <View style={[posiciones.abolute, posiciones.topright]}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Icon icon="settings" color={icons.dark} size={icons.lg}></Icon>
          </TouchableOpacity>
        </View>

          <MyTitle title="My" titleBold="Progress"></MyTitle>

          {/* Scroll Horizontal */}
          {/* For de niveles */}

          <MyText title="What would you like to learn today?"></MyText>
          <Flatlist data={state}></Flatlist>
      </View>
    );
}


// }