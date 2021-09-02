import React, { Component } from 'react';
import { View } from 'react-native';
import { BlueButton } from '../components/Buttons/BlueButton';
import { MyText } from '../components/Texts/MyText';
import { MyTextSec } from '../components/Texts/MyTextSec';
import { MyTitle } from '../components/Texts/MyTitle';
import { RedButton } from '../components/Buttons/RedButton ';
import { OptionSelectedButton } from '../components/Buttons/OptionSelectedButton';
import { OptionButton } from '../components/Buttons/OptionButton';
import { RoundButton } from '../components/Buttons/RoundButton';


export default class Lecciones extends Component {
  constructor(props) {
      super(props);
  }
    
  render() {
    return (
      <View>
          <MyTitle title="My" titleBold="progress"></MyTitle>
          <MyTextSec title="Lessons"></MyTextSec>
          <MyText title="What would you like to learn today?"></MyText>

          <BlueButton title="Check answer"></BlueButton>
          <RedButton title="Check answer"></RedButton>
          <OptionSelectedButton title="Option XX"></OptionSelectedButton>
          <OptionButton title="Option selected"></OptionButton>
          {/* <RoundButton icon="home"></RoundButton> */}

      </View>
    );
  }
}