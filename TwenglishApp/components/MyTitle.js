import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const MyTitle = ({title}) => {
    return (
        <Text style={baseStyle.texto}>{title}</Text> 
    );
};

const baseStyle = StyleSheet.create({
    texto: {
        fontSize: 16,
        color: "blue",      
        fontFamily: 'sen_bold'
    }
});
