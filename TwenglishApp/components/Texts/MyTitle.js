import React from 'react';
import { Text, View } from 'react-native';
import { text } from '../../assets/theme/styles';

export const MyTitle = ({title, titleBold}) => {
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={[text.primario, text.primarioTitulo, text.rightt]}>{title}</Text> 
            <Text style={[text.primario, text.primarioTitulo, text.primarioBold]}>{titleBold}</Text>
        </View>
    );
};
