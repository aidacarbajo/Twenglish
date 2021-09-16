import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, Pressable, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header/Header';
import Flatlist from '../components/Flatlist/Flatlist';
import CardImage from '../components/Card/CardImage';
import { cards, view } from '../assets/theme/styles';
import { getImage } from '../util/ImageManager';
import Tag from '../components/Card/Tag';
import MyText from '../components/Texts/MyText';
import BlueButton from '../components/Buttons/BlueButton';

class Voc_Ex1 extends Component {

    constructor(props) {
        super(props);


        const ej1 = [
            {
                key: 0,
                portada: 'greetingsA1',
                resultado: 'acantilado'
            },
            {
                key: 1,
                portada: 'greetingsA1',
                resultado: 'acantilado'
            },
            {
                key: 2,
                portada: 'greetingsA1',
                resultado: 'acantilado'
            },
            {
                key: 3,
                portada: 'greetingsA1',
                resultado: 'acantilado'
            },

        ]


        this.state = {
            isLoading: false,
            dataRealm: ej1
        };
    
    }

    getEjercicio = () => {
    
    }

 
    render() {
        if(this.state.isLoading){
        return (
            <View>
                <ActivityIndicator/>
            </View>
        )
        } else {
            return (
                // style={{height: '100%', backgroundColor: view.container.backgroundColor}}
                <View style={view.container, {paddingTop: 0}}>
                    <Header navigation={this.props.navigation}></Header>
                    
                    <View style={[view.safeArea, {width: '100%', height: '100%'}]}>
                        <MyText title="Choose the correct image."></MyText>

                        <FlatList
                            style={[cards.padding]}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            showsVerticalScrollIndicator={false}
                            data={this.state.dataRealm}
                            keyExtractor={(item, index) => index }
                            renderItem={(item, index) => 
                                <View style={[cards.card, cards.dimensions]}>
                                    <Pressable style={cards.back}>         
                                        <View style={[cards.dimensions]}>
                                            <ImageBackground 
                                                source={getImage(item.item.portada)} 
                                                resizeMode="cover" 
                                                style={[cards.image]} 
                                                imageStyle={{ borderRadius: 12}}
                                            >
                                                {/* Solo se añade si se ha acertado */}
                                                <Tag dataTitle={item.item.resultado}></Tag>

                                            </ImageBackground> 
                                        </View>
                                    </Pressable>
                                </View>                        }>
                        </FlatList>

                        {/* Boton de corregir para cuando apriete a una de las imagenes */}
                        <BlueButton title="Check answer"></BlueButton>
                    </View>
                    
                </View>
            );
        }
    }
}

export default Voc_Ex1;