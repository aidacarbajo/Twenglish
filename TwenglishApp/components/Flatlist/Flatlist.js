import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { cards } from '../../assets/theme/styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default ( {data} ) => {
    const image = require('../../assets/img/logo.png');

    return (
        <FlatList style={cards.padding}
            data={data.items}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={(item, index) => item.id }
            renderItem={(item) => 
            // <Card />
            // <TouchableOpacity>          
                <View style={[cards.card, cards.dimensions]}>
                    <ImageBackground source={image} resizeMode="cover" style={cards.image} imageStyle={{ borderRadius: 12}}>
                    {/* <Text>Inside</Text> */}
                    </ImageBackground> 
                </View>
            // </TouchableOpacity>

        }>
        </FlatList>

    );
}