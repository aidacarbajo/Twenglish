import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { icons, posiciones, secundary, view } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyTitle from '../components/Texts/MyTitle';

export default ({navigation}) => {
    return (
        <View style={view.allContainers}>
            <View style={[posiciones.abolute, posiciones.topleft]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon icon="back" color={secundary} size={icons.lg}></Icon>
                </TouchableOpacity>
            </View>

            <MyTitle title="Información de" titleBold="Twenglish"></MyTitle>

        </View>
    );
}