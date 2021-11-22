import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { button, text } from '../../assets/theme/styles';

export const OptionSelectedButton = ({title, titulo}) => {
  return (
   <TouchableOpacity style={[button.button, button.option, button.optionSelected]}>
      { titulo != undefined && <Text style={[text.secundario, {fontFamily: 'sen_extra_bold', marginBottom: EStyleSheet.value('$5')}]}>{titulo}</Text>}
      <Text style={[text.lila, text.opcion]}>{title}</Text>
   </TouchableOpacity>  
  );
};