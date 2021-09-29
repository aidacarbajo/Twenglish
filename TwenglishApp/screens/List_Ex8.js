import React, {Component} from 'react';
import { ActivityIndicator, View } from 'react-native';
import RadioButton from '../components/RadioButton/RadioButton';
import VoiceManager from '../util/VoiceManager';

class List_Ex8 extends Component {

    constructor(props) {
        super(props);

        // console.log(props.radioB);

        // RadioButton con 4 opciones (nombreImagen, true/false)
        this.fraseCorrecta = null;       
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

    showCheck = (correcta) => {
        this.props.buttonCheck(true, true);
        this.correcta = correcta;
        this.checkAnswer();
    }

    checkAnswer = () => {
        if(this.correcta) {
            this.props.buttonCheck('acierto', true);
            return true;
        } else {
            this.props.buttonCheck('fallo');
            return false;
        }
    }

    saveCorrecta = (correcta) => {
        if(this.fraseCorrecta === null) {
            this.fraseCorrecta = correcta;
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
                    {/* Radio Button */}
                    <RadioButton opciones={this.props.radioB} check={this.showCheck}></RadioButton>
                </View>    
            );
        }
    }
}

export default List_Ex8;