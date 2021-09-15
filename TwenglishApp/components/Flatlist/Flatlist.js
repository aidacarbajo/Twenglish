import React, { Component } from 'react';
import { View } from 'react-native';
import { cards } from '../../assets/theme/styles';
import { FlatList } from 'react-native-gesture-handler';
import CardImage from '../Card/CardImage';

class Flatlist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tema: null,
            portada: null
        }
    }

    modalFunction = (temaA, portadaA) => {
        this.setState.bind({tema: temaA, portada: portadaA});
        this.props.lessonsModal(true, temaA, portadaA);
    }

    render() {
        return (
            <View style={[cards.height]}>
                <FlatList style={cards.padding}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={this.props.dataRealm}
                    keyExtractor={(item) => item.tema }
                    renderItem={(item) => 
                        <CardImage lessonsModal={this.modalFunction} visible={this.state.isLessonsVisible} dataImagen={item.item.portada} dataTitle={item.item.tema} data100={item.item.progreso} navigation={this.props.navigation}></CardImage>
                    }>
                </FlatList>
            </View>
        );
    }
}

export default Flatlist;

