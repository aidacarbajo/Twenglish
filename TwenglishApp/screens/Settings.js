import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { icons, posiciones, secundary, view } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyTitle from '../components/Texts/MyTitle';
import MyText from '../components/Texts/MyText';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    return (
        <View style={view.container}>
            <View style={[posiciones.abolute, posiciones.topleft]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon icon="back" color={secundary} style={icons.lg}></Icon>
                </TouchableOpacity>
            </View>

            <ScrollView style={view.safeArea}>
                <MyTitle title="Información de" titleBold="Twenglish"></MyTitle>

                <MyText title="Twenglish es una app móvil con el objetivo de hacerte aprender y repasar el inglés. Se trata de un Proyecto Final de Grado realizado por Aida Carbajo Fernández (aiduu_carbajo), estudiante de Ingeniería Multimedia en la Universidad de Alicante." style={{lineHeight: 13}}></MyText>
                
                <MyTitle title={'Imágenes Unsplash'} style={{fontSize: EStyleSheet.value('$10') + EStyleSheet.value('$5'), marginTop: EStyleSheet.value('$20'), marginBottom: EStyleSheet.value('$5')}}></MyTitle>
                <MyText title="Todas las imágenes de Twenglish han sido descargadas y utilizadas bajo la licencia estándar de Unsplash." style={{lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$1'), marginTop: EStyleSheet.value('$5')}}></MyText>
                
                <MyTitle title={'Tecnologías'} style={{fontSize: EStyleSheet.value('$10') + EStyleSheet.value('$5'), marginTop: EStyleSheet.value('$20'), marginBottom: EStyleSheet.value('$5')}}></MyTitle>
                <MyText title="La app ha sido desarrollada con NPM como gestión de paquetes, React Native como framework de interfaz de usuario, y Realm como base de datos." style={{lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$1'), marginBottom: EStyleSheet.value('$5')}}></MyText>
                <MyText title="Para la conversión de texto a voz en los listening se ha usado: react-native-tts." style={{lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$1'), marginBottom: EStyleSheet.value('$5')}}></MyText>
                <MyText title="Para el reconocimiento de voz: react-native-voice." style={{lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$1')}}></MyText>

                <MyTitle title={'Privacidad'} style={{fontSize: EStyleSheet.value('$10') + EStyleSheet.value('$5'), marginTop: EStyleSheet.value('$20'), marginBottom: EStyleSheet.value('$5')}}></MyTitle>
                <MyText title="Como te habrás dado cuenta, no necesitas ninguna cuenta para poder empezar a usar la app. Los avances del usuario no se almacenan en remoto por lo que únicamente sabrás tus resultados tú." style={{lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$1'), marginBottom: EStyleSheet.value('$5')}}></MyText>
            </ScrollView>

        </View>
    );
}