import React from 'react';
import { button } from '../../assets/theme/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../Icons/Icon';

export const RoundButton = ({icon}) => {
//   const onPress = async () => {
//   };
  return (
    <LinearGradient locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.round]}>
      <Icon icon={icon}></Icon>
    </LinearGradient>
  );
};
