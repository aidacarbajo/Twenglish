import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { button, text } from '../../assets/theme/styles';

export const OptionSelectedButton = ({title, titulo}) => {
  return (
   <TouchableOpacity style={[button.button, button.option, button.optionSelected]}>
      { titulo != undefined && <Text style={[text.secundario, {fontFamily: 'sen_extra_bold', marginBottom: 5}]}>{titulo}</Text>}
      <Text style={[text.secundario, text.opcion]}>{title}</Text>
   </TouchableOpacity>  
  );
};