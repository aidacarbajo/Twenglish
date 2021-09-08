import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyText from '../components/Texts/MyText';

export default ( {navigation} ) => {
 
    const array = [
    {
      key: '1',
      title: 'Example option 1',
    },
    {
      key: '2',
      title: 'Example option 2',
    },
    {
      key: '3',
      title: 'Example option 3',
    }
    ];
      
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

          {/* Menu fijo abajo del todo con navegacion funcional */}
      </View>
    );
}


// }