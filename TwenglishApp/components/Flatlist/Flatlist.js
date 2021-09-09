import React from 'react';
import { View } from 'react-native';
import { cards } from '../../assets/theme/styles';
import { FlatList } from 'react-native-gesture-handler';
import CardImage from '../Card/CardImage';

export default ( {data} ) => {
    // console.log('');
    // console.log(data.items);
    return (
        <View style={cards.height}>
            <FlatList style={cards.padding}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                // inverted
                data={data.items}
                keyExtractor={(item) => item.id }
                renderItem={(item) => 
                    <CardImage dataImagen={item.item.image} dataTitle={item.item.title} data100={item.item.porcentaje}></CardImage>
                }>
                
            </FlatList>
        </View>

    );
}