import React from 'react';
import { button } from '../../assets/theme/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../Icons/Icon';
import { Pressable, TouchableOpacity } from 'react-native';

export const RoundButton = ({icon, color}) => {
  return (
    <LinearGradient locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.round]}>
      {
        // icon == "notes" 
        // ? <TouchableOpacity><Icon icon={icon} color={color}></Icon></TouchableOpacity>
         <Icon icon={icon} color={color}></Icon>
      }
    </LinearGradient>
  );
};
