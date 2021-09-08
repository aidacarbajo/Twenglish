import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { cards } from '../../assets/theme/styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { getImage } from '../../util/ImageManager';

export default ( {data} ) => {
    return (
        <FlatList style={cards.padding}
            showsVerticalScrollIndicator={false}
            data={data.items}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id }
            renderItem={(item) => 
            // <Card />
            // <TouchableOpacity>          
                <View style={[cards.card, cards.dimensions]}>
                    <ImageBackground source={getImage('Logo')} resizeMode="cover" style={cards.image} imageStyle={{ borderRadius: 12}}>
                    </ImageBackground> 
                </View>
            // </TouchableOpacity>

        }>
        </FlatList>

    );
}