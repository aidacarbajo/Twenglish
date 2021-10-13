import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { button, text } from '../../assets/theme/styles';

export const OptionSelectedButton = ({title}) => {
  return (
   <TouchableOpacity style={[button.button, button.option, button.optionSelected]}>
      <Text style={[text.secundario, text.opcion]}>{title}</Text>
   </TouchableOpacity>  
  );
};