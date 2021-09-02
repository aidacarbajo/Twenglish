import React from 'react';
import { Pressable, Text } from 'react-native';
import { button, text } from '../../assets/theme/styles';

export const OptionButton = ({title}) => {
//   const onPress = async () => {
//   };
  return (
   <Pressable style={[button.button, button.option]}>
      <Text style={[text.primario, text.opcion]}>{title}</Text>
   </Pressable>  
  );
};