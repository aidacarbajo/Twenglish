import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { cards } from '../../assets/theme/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getImage } from '../../util/ImageManager';
import Tag from './Tag';

export default ( { dataImagen, dataTitle, data100 } ) => {
    // console.log(dataImagen);
    return (
        <View style={[cards.card, cards.dimensions]}>
            <TouchableOpacity style={cards.back}>         
                <View style={[cards.dimensions]}>
                    <ImageBackground 
                        source={getImage(dataImagen)} 
                        resizeMode="cover" 
                        style={[cards.image]} 
                        imageStyle={{ borderRadius: 12}} /*{opacity: 0.8}*/
                    >
                       <Tag data100={data100} dataTitle={dataTitle}></Tag>
                    </ImageBackground> 
                </View>
            </TouchableOpacity>
        </View>
    );
}