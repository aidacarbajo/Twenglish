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
import Voc_Ex1 from './Voc_Ex1';

class Ejercicios extends Component {

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
            ? <MyTitle title={enunciado.frase} style={{fontSize: 12, fontFamily: bold}} destacar={enunciado.palabraClave}></MyTitle>
            : <MyTitle title={this.state.dataRealm[this.state.dataRealm.length - 1].frase} style={{fontSize: 12, fontFamily: bold}} destacar={this.state.dataRealm[this.state.dataRealm.length - 1].palabraClave}></MyTitle>
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
                <View style={[{paddingTop: 0, height: '100%'}]}>
                    <Header navigation={this.props.navigation}></Header>
                    
                    <View style={[view.safeArea, {width: '100%', height: '85%'}]}>
                        {/* Enunciado del ejercicio */}
                        <MyText title="Choose the correct image."></MyText>

                        {/* Tipo de pregunta del ejercicio*/}
                        {/* getEjercicio(), que tenga un switch que llame a las preguntas y a las respuestas dependiendo el tipo de ejercicio? */}
                        <Voc_Ex1></Voc_Ex1>

                        
                    </View>

                    <View style={[{position: 'absolute', bottom: 0, paddingHorizontal: 30, paddingVertical: 10, width:'100%'}]}>
                        <BlueButton title="Check answer"></BlueButton>
                    </View>

                    
                </View>
            );
        }
    }
}

export default Ejercicios;