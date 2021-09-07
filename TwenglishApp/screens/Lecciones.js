import React, { Component } from 'react';
import { View } from 'react-native';
import { BlueButton } from '../components/Buttons/BlueButton';
// import { MyText } from '../components/Texts/MyText';
// import { MyTextSec } from '../components/Texts/MyTextSec';
import MyTitle from '../components/Texts/MyTitle';
import { RedButton } from '../components/Buttons/RedButton ';
// import { OptionSelectedButton } from '../components/Buttons/OptionSelectedButton';
// import { OptionButton } from '../components/Buttons/OptionButton';
// import { RoundButton } from '../components/Buttons/RoundButton';
import { StyleSheet } from 'react-native';
import RadioButton from '../components/RadioButton/RadioButton';

export default class Lecciones extends Component {
  constructor(props) {
      super(props);
  }
    
  render() {
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        padding: 40,
      },
      margin: {
        display: 'flex',
        marginTop: 50,
        padding: 20
      }
    });

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
      <View style={styles.container}>
          
          <MyTitle title="My" titleBold="progress"></MyTitle>
          {/* <MyTextSec title="Lessons"></MyTextSec>
          <MyText title="What would you like to learn today?" style={styles.margin}></MyText> */}

          <BlueButton title="Check answer"></BlueButton>
          <RedButton title="Check answer"></RedButton>
          <RadioButton opciones={array}></RadioButton>
          
          {/* <RoundButton icon="notes" style={styles.margin}></RoundButton> */}
        


      </View>
    );
}


}