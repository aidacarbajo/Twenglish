import React from 'react';
import { Text } from 'react-native';
import { text } from '../../assets/theme/styles';

export const MyTextSec = ({title}) => {
    return (
        <Text style={[text.body, text.secundario]}>{title}</Text> 
    );
};
