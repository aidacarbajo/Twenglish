import React, {Component, GetDerivedStateFromProps} from 'react';
import { ActivityIndicator, ImageBackground, Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../components/Header/Header';
import { bold, cards, view } from '../assets/theme/styles';
import { getImage } from '../util/ImageManager';
import Tag from '../components/Card/Tag';
import MyText from '../components/Texts/MyText';
import BlueButton from '../components/Buttons/BlueButton';
import MyTitle from '../components/Texts/MyTitle';

class Voc_Ex1 extends Component {

    constructor(props) {
        super(props);
        
        // Cuando apriete a una imagen que se guarde esa palabra en la posicion del indice apretado
        // Cuando le de a check comprueba estos resultados con los suyos
        const respuestasUsuario = ['', '', '', ''];


        const enunciado = [
            {
                key: 0,
                portada: 'greetingsA1',
                palabraClave: ['Niagara Falls'],
                frase: 'I visited the {0} yesterday.'
            },
            {
                key: 1,
                portada: 'greetingsA1',
                palabraClave: ['piramides'],
                frase: 'I visited the {0} yesterday'
            },
            {
                key: 2,
                portada: 'greetingsA1',
                palabraClave: ['Niagara Falls'],
                frase: 'I visited the {0} yesterday'
            },
            {
                key: 3,
                portada: 'greetingsA1',
                palabraClave: ['Niagara Falls'],
                frase: 'I visited the {0} yesterday'
            },

        ]


        this.state = {
            isLoading: false,
            dataRealm: enunciado,
            pressed: [false, false, false, false],
        };

        this.isPressed = this.isPressed.bind(this);
    
    }

    getEjercicio = () => {
    
    }

    isPressed = (index, refreshh) => {
        let arrayPressed = [...this.state.pressed];
        arrayPressed[index] = true;
        this.setState({pressed: arrayPressed});
    }

   
    shouldComponentUpdate(nextProps, nextState) {                                     
        return true;                      
    }


    list = () => {    
        const enunciado = this.state.dataRealm.find(element => !this.state.pressed[element.key]);
        // console.log(enunciado);
        return (
            enunciado !== undefined
            ? <MyTitle title={enunciado.frase} style={{fontSize: 12, fontFamily: bold, marginVertical: 15}} destacar={enunciado.palabraClave}></MyTitle>
            : <MyTitle title={this.state.dataRealm[this.state.dataRealm.length - 1].frase} style={{fontSize: 12, fontFamily: bold, marginVertical: 15}} destacar={this.state.dataRealm[this.state.dataRealm.length - 1].palabraClave}></MyTitle>
        )  
    };

 
    render() {
        if(this.state.isLoading){
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            return (
                <View>
                    <View>{this.list()}</View>

                    <FlatList
                        style={{paddingHorizontal: cards.padding.paddingHorizontal, paddingVertical: 20}}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        showsVerticalScrollIndicator={false}
                        data={this.state.dataRealm}
                        keyExtractor={(item, index) => index }
                        renderItem={(item, index) => 
                            <View style={[cards.card, cards.dimensions]}>
                                <Pressable style={cards.back} onPress={() => this.isPressed(item.index)}>         
                                    <View style={[cards.dimensions]}>
                                        <ImageBackground 
                                            source={getImage(item.item.portada)} 
                                            resizeMode="cover" 
                                            style={[cards.image]} 
                                            imageStyle={{ borderRadius: 12}}
                                        >
                                            {/* Solo se añade si se ha acertado */}
                                            {this.state.pressed[item.index] === true && (
                                                <Tag dataTitle={item.item.palabraClave}></Tag>
                                            )}

                                        </ImageBackground> 
                                    </View>
                                </Pressable>
                            </View>                        }>
                    </FlatList>                    
                </View>
            );
        }
    }
}

export default Voc_Ex1;