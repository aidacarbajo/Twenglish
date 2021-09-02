import React from 'react';
import { Text } from 'react-native';
import { text } from '../../assets/theme/styles';

export const MyTextWhite = ({title}) => {
    return (
        <Text style={[text.body, text.white]}>{title}</Text> 
    );
};
