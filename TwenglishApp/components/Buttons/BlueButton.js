import React from 'react';
import { Pressable } from 'react-native';
import { button } from '../../assets/theme/styles';
import { MyTextWhite } from '../Texts/MyTextWhite';
import LinearGradient from 'react-native-linear-gradient';

export const BlueButton = ({title}) => {
//   const onPress = async () => {
//   };
  return (
   <Pressable>
      <LinearGradient locations={[0, 0.5, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.primary.backgroundColor} style={[button.button]}>
          <MyTextWhite title={title}></MyTextWhite>
      </LinearGradient>
   </Pressable>  
  );
};