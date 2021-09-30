import React, {Component} from 'react';
import { View } from 'react-native';
import { bold, example } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';
import SpeakManager from '../util/SpeakManager';

class Speak_Ex9 extends Component {

    constructor(props) {
        super(props);

        // [ingles, traduccion]
        this.frases = props.frases;  
        this.respuestaUsuario = '';    
    }

    componentDidMount() {
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
        return(
            <View style={{ height: '100%'}}>
                <View>
                    <MyTitle title={this.frases[0]} style={{fontSize: 12, fontFamily: bold, marginTop: 40}} />
                    <MyText title={this.frases[1]} style={{fontSize: 12, marginTop: -10, color: example}}/>
                </View>

                <SpeakManager></SpeakManager>
                
                
            </View>    
        );
    }
}

export default Speak_Ex9;