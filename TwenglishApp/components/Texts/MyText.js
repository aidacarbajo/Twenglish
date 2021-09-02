import React from 'react';
import { Text } from 'react-native';
import { text } from '../../assets/theme/styles';

export const MyText = ({title}) => {
    return (
        <Text style={text.body}>{title}</Text> 
    );
};

