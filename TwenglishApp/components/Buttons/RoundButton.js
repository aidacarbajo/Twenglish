import React from 'react';
import { button } from '../../assets/theme/styles';
import LinearGradient from 'react-native-linear-gradient';
// import '../../assets/icons/element-icons.ttf';
import { Icon } from 'react-native-elements';

export const RoundButton = ({icon}) => {
//   const onPress = async () => {
//   };
  console.log(icon);

  return (
    <LinearGradient locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.round]}>
      {/* <Icon name={icon}/> */}
    </LinearGradient>
  );
};
