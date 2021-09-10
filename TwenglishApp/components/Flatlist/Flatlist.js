import React, { Component } from 'react';
import { View } from 'react-native';
import { cards } from '../../assets/theme/styles';
import { FlatList } from 'react-native-gesture-handler';
import CardImage from '../Card/CardImage';

class Flatlist extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={cards.height}>
                <FlatList style={cards.padding}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    // inverted
                    data={this.props.dataRealm}
                    keyExtractor={(item) => item.tema }
                    renderItem={(item) => 
                        <CardImage dataImagen={item.item.portada} dataTitle={item.item.tema} data100={item.item.progreso}></CardImage>
                    }>
                    
                </FlatList>
            </View>

        );
    }
}

export default Flatlist;

