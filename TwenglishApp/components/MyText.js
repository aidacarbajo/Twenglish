import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const MyText = ({title}) => {
    return (
        <Text style={baseStyle.texto}>{title}</Text> 
    );
};

const baseStyle = StyleSheet.create({
    texto: {
        fontSize: 14,
        color: "gray",      
        fontFamily: 'sen_regular'
    }
});
