import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, View } from 'react-native';
import { cards } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import { getImage } from '../util/ImageManager';

class Voc_Ex2 extends Component {

    constructor(props) {
        super(props);
        
        const opcioness = props.radioB.opciones;
        let opciones = JSON.parse(JSON.stringify(opcioness));

        this.state = {
            isLoading: false,
            opciones: opciones,
            imagen: props.imagen[0],
            correcta: false
        };

        this.showCheck = this.showCheck.bind();
        this.checkAnswer = this.checkAnswer.bind();
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

    static getDerivedStateFromProps(nextProps, state) {
        console.log(nextProps.imagen[0], state.imagen)
        if(nextProps.imagen[0] != state.imagen) {
            const opcioness = nextProps.radioB.opciones;
            const opciones = JSON.parse(JSON.stringify(opcioness));
    
            return {
                imagen: nextProps.imagen[0],
                opciones: opciones,
                correcta: false
            }
        }
        return null;
    }

    showCheck = (correcta) => {
        this.props.buttonCheck(true, true);
        this.setState({correcta: correcta});
    }

    checkAnswer = () => {
        if(!this.state.correcta) {
            this.props.buttonCheck(false);
            this.setState({correcta: false});
        }
        return this.state.correcta;      
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
                    <View style={{width: '100%', height: 180, marginTop: 20}}>
                        <ImageBackground 
                            source={getImage(this.state.imagen)} 
                            resizeMode="cover" 
                            style={[cards.image]} 
                            imageStyle={{ borderRadius: 12, width: '100%', height: 180, shadowColor: 'black'}} >
                        </ImageBackground>  
                    </View>
                    <RadioButton opciones={this.state.opciones} check={this.showCheck} correcta={this.props.esCorrecta}></RadioButton>
                </View>
            );
        }
    }
}

export default Voc_Ex2;