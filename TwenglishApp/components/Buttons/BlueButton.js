import React from 'react';
import { TouchableOpacity } from 'react-native';
import { button, text } from '../../assets/theme/styles';
import MyTextWhite from '../Texts/MyTextWhite';
import LinearGradient from 'react-native-linear-gradient';

export const BlueButton = ({title, navigation}) => {
  const onPress = async () => {

  };

  return (
      <LinearGradient locations={[0, 0.5, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.primary.backgroundColor} style={[button.button]}>
        <TouchableOpacity style={text.buttonText}>
          <MyTextWhite title={title}></MyTextWhite>
        </TouchableOpacity>
      </LinearGradient>
      // </View>

  );
};