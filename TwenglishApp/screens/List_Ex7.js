import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, Pressable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { cards } from '../assets/theme/styles';
import { getImage } from '../util/ImageManager';
import VoiceManager from '../util/VoiceManager';

class List_Ex7 extends Component {

    constructor(props) {
        super(props);

        // RadioButton con 4 opciones (nombreImagen, true/false)
        this.imagenCorrecta = null;       
        const imagenes = JSON.parse(JSON.stringify(props.imagenes));
        this.desordenado = [];
        this.desordenado = [...imagenes].sort(() => {return Math.random() - 0.5});

        this.respuestaUsuario = '';    

        this.state = {
            isLoading: true,
            pause: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: false});
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    checkAnswer = (frasePressed) => {
        if(frasePressed === this.imagenCorrecta) {
            this.props.buttonCheck('acierto', true);
            return true;
        } else {
            this.props.buttonCheck('fallo');
            return false;
        }
    }

    saveCorrecta = (correcta) => {
        if(this.imagenCorrecta === null) {
            this.imagenCorrecta = correcta;
        }
    }

    render() {
        if(this.state.isLoading){
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            return(
                <View>
                    <VoiceManager texto={this.props.texto} />
                    <FlatList
                        style={{paddingHorizontal: cards.padding.paddingHorizontal, paddingVertical: 20}}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        showsVerticalScrollIndicator={false}
                        data={this.desordenado}
                        keyExtractor={(item, index) => index }
                        renderItem={(item, index) => 
                            <View style={[cards.card, cards.dimensions]}>
                                <Pressable style={cards.back} onPress={() => this.checkAnswer(item.item.frase)}>         
                                    <View style={[cards.dimensions]}>
                                        <ImageBackground 
                                            source={getImage(item.item.frase)} 
                                            resizeMode="cover" 
                                            style={[cards.image]} 
                                            imageStyle={{ borderRadius: 12}}
                                        />
                                        {
                                            item.item.esCorrecta && this.saveCorrecta(item.item.frase)
                                        }
                                    </View>
                                </Pressable>
                            </View>
                        }>
                    </FlatList> 
                </View>    
            );
        }
    }
}

export default List_Ex7;