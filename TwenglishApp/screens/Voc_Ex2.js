import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, View } from 'react-native';
import { cards } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import { getImage } from '../util/ImageManager';

class Voc_Ex2 extends Component {

    constructor(props) {
        super(props);
        
        this.imagen = props.imagen[0];
        this.opcioness = props.radioB.opciones;
        this.opciones = JSON.parse(JSON.stringify(this.opcioness));

        this.correcta = false;

        this.state = {
            isLoading: false,
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

    showCheck = (correcta) => {
        this.props.buttonCheck(true, true);
        this.correcta = correcta;
    }

    checkAnswer = () => {
        if(!this.correcta) {
            this.props.buttonCheck(false);
                this.correcta = false;
        }
        return this.correcta;      
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
                            source={getImage(this.imagen)} 
                            resizeMode="cover" 
                            style={[cards.image]} 
                            imageStyle={{ borderRadius: 12, width: '100%', height: 180, shadowColor: 'black'}} >
                        </ImageBackground>  
                    </View>
                    <RadioButton opciones={this.opciones} check={this.showCheck}></RadioButton>
                </View>
            );
        }
    }
}

export default Voc_Ex2;