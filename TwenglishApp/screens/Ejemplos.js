import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BlueButton } from '../components/Buttons/BlueButton';
import MyTitle from '../components/Texts/MyTitle';
import { RedButton } from '../components/Buttons/RedButton ';
import { StyleSheet } from 'react-native';
import RadioButton from '../components/RadioButton/RadioButton';
import { view, posiciones, icons } from '../assets/theme/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icons/Icon';

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
          {/* <MyTextSec title="Lessons"></MyTextSec>
          <MyText title="What would you like to learn today?" style={styles.margin}></MyText> */}

         {/* <TouchableOpacity onPress={() => navigation.push("Settings")}> */}
            <BlueButton title="Check answer" navigation={navigation}></BlueButton>
         {/* </TouchableOpacity> */}


          <RedButton title="Check answer"></RedButton>
          <RadioButton opciones={array}></RadioButton>
          
          {/* <RoundButton icon="notes" style={styles.margin}></RoundButton> */}
        

      </View>
    );
}


// }