import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, posiciones, view } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyTitle from '../components/Texts/MyTitle';

export default ({navigation}) => {
    return (
        <View style={view.container}>
            <View style={[posiciones.abolute, posiciones.topleft]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon icon="back" color={icons.dark} size={icons.lg}></Icon>
                </TouchableOpacity>
            </View>

            <MyTitle title="Información de" titleBold="Twenglish"></MyTitle>

        </View>
    );
}