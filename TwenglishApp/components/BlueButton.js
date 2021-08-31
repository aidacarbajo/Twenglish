import React from 'react';
import { Button } from 'react-native';
// const { WriteRealmModule } = NativeModules;


export const BlueButton = ({title}) => {
//   const onPress = async () => {
//   };
  return (
     <Button
      title={title}
      color="#000"
      fontFamily= 'sen_bold'
      ></Button> 
    //   onPress={onPress}

    
  );
};