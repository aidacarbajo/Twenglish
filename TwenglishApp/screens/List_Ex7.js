import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, Pressable, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FlatList } from 'react-native-gesture-handler';
import { cards } from '../assets/theme/styles';
import { getImage } from '../util/ImageManager';
import VoiceManager from '../util/VoiceManager';

class List_Ex7 extends Component {

    constructor(props) {
        super(props);

        // RadioButton con 4 opciones (nombreImagen, true/false)
        const imagenes = JSON.parse(JSON.stringify(props.imagenes));
        let desordenado = [];
        desordenado = [...imagenes].sort(() => {return Math.random() - 0.5});
        
        let imagenCorrecta = desordenado.find(item => {
            return item.esCorrecta;
        })

        this.state = {
            isLoading: true,
            pause: false,
            imagenCorrecta: imagenCorrecta.frase,
            ordenado: props.imagenes,
            desordenado: desordenado,
        };
    }

    componentDidMount() {
        this.setState({isLoading: false});
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.imagenes[0].frase != state.ordenado[0].frase) {

            const imagenes = JSON.parse(JSON.stringify(nextProps.imagenes));
            
            let desordenado = [];
            desordenado = [...imagenes].sort(() => {return Math.random() - 0.5});
            
            let imagenCorrecta = desordenado.find(item => {
                return item.esCorrecta;
            })
    
            return {
                pause: false,
                imagenCorrecta: imagenCorrecta.frase,
                desordenado: desordenado,
                ordenado: imagenes
            };
        }
        
        return null;
    }

    checkAnswer = (frasePressed) => {
        if(frasePressed === this.state.imagenCorrecta) {
            this.props.buttonCheck('acierto', true);
            return true;
        } else {
            this.props.buttonCheck('fallo');
            return false;
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
                        style={{paddingHorizontal: cards.padding.paddingHorizontal, paddingVertical: EStyleSheet.value('$20')}}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        showsVerticalScrollIndicator={false}
                        data={this.state.desordenado}
                        keyExtractor={(item, index) => index }
                        renderItem={(item, index) => 
                            <View style={[cards.card, cards.dimensions]}>
                                <Pressable style={cards.back} onPress={() => this.checkAnswer(item.item.frase)}>         
                                    <View style={[cards.dimensions]}>
                                        <ImageBackground 
                                            source={getImage(item.item.frase)} 
                                            resizeMode="cover" 
                                            style={[cards.image]} 
                                            imageStyle={{ borderRadius: EStyleSheet.value('$borderImage')}}
                                        />
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