import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, View } from 'react-native';
import { getImage } from '../util/ImageManager';

class Voc_Ex2 extends Component {

    constructor(props) {
        super(props);
        
        // this.respuestasUsuario = ['', '', '', ''];

        // const frases = props.ejercicio.frase;
        // const opcionesClave = props.ejercicio.opcionesClave;        
        // const imagenes = JSON.parse(JSON.stringify(props.ejercicio.imagenes));
        // const desordenado = [...imagenes].sort(() => {return Math.random() - 0.5});

        // const data = {
        //                 frases: frases.split('"'), 
        //                 portada: imagenes,
        //                 portadaDesordenada: desordenado,
        //                 palabraClave: opcionesClave,
        //             }

        this.state = {
            isLoading: false,
            // dataRealm: data,
            // pressed: [false, false, false, false],
            // actual: 0
        };

        // this.isPressed = this.isPressed.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    shouldComponentUpdate(nextProps, nextState) {                                     
        return true;                      
    }

    checkAnswer = () => {
           
    }

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
                                       
                </View>
            );
        }
    }
}

export default Voc_Ex2;