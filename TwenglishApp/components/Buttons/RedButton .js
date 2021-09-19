import React from 'react';
import { button, text } from '../../assets/theme/styles';
import MyTextWhite from '../Texts/MyTextWhite';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';



export const RedButton = ({title}) => {
//   const onPress = async () => {
//   };
  return (
    <LinearGradient locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.button]}>
        <TouchableOpacity style={text.buttonText}>
          <MyTextWhite title={title}></MyTextWhite>
        </TouchableOpacity>
    </LinearGradient>
  );
};
