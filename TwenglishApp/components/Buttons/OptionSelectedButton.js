import React from 'react';
import { Pressable, Text } from 'react-native';
import { button, text } from '../../assets/theme/styles';

export const OptionSelectedButton = ({title}) => {
//   const onPress = async () => {
//   };
  return (
   <Pressable style={[button.button, button.option, button.optionSelected]}>
      <Text style={[text.secundario, text.opcion]}>{title}</Text>
   </Pressable>  
  );
};