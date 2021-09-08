import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { cards, view, posiciones, icons } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyText from '../components/Texts/MyText';
import { FlatList } from 'react-native-gesture-handler';
import Flatlist from '../components/Flatlist/Flatlist';

export default ( {navigation} ) => {
 
    const array = [
    {
      id: '1',
      title: 'Example option 1',
    },
    {
      id: '2',
      title: 'Example option 2',
    },
    {
      id: '3',
      title: 'Example option 3',
    },
    {
      id: '4',
      title: 'Example option 4',
    },
    {
      id: '5',
      title: 'Example option 5',
    },
    {
      id: '6',
      title: 'Example option 6',
    },
    // {
    //   id: '7',
    //   title: 'Example option 7',
    // },
    // {
    //   id: '8',
    //   title: 'Example option 8',
    // }
    ];

    state = {
      items: array
    }
      
    return (
      <View style={view.container}>
        <View style={[posiciones.abolute, posiciones.topright]}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Icon icon="settings" color={icons.dark} size={icons.lg}></Icon>
          </TouchableOpacity>
        </View>

          <MyTitle title="My" titleBold="progress"></MyTitle>

          {/* Scroll Horizontal */}
          {/* For de niveles */}

          <MyText title="What would you like to learn today?"></MyText>

          {/* Cards con imagenes y etiquetas de las lecciones en columnas de dos */}
          {/* Al hacer press que haga un TouchableOpacity */}
          <Flatlist data={state}
            ></Flatlist>

          {/* Menu fijo abajo del todo con navegacion funcional */}
      </View>
    );
}


// }