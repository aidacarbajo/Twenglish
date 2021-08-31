import React, { Component } from 'react';
import { View } from 'react-native';
import {BlueButton} from '../components/BlueButton';
import {MyText} from '../components/MyText';
import { MyTitle } from '../components/MyTitle';

export default class Lecciones extends Component {
  constructor(props) {
      super(props);
  }
    
  render() {
    return (
      <View>
          <BlueButton title="Hola"></BlueButton>
          <MyText title="Esto es un texto desde el componente" ></MyText>
          <MyTitle title="Esto es un titulo"></MyTitle>
      </View>
    );
  }
}