import { View } from 'react-native';
import React from 'react';
import { view } from '../assets/theme/styles';
import MyTitle from '../components/Texts/MyTitle';

export default ({navigation}) => {
    return (
        <View style={view.allContainers}>
            <MyTitle title="My" titleBold="Routine"></MyTitle>

        </View>
    );
}