import React, {Component} from 'react';
import { View } from 'react-native';
import { button, secundary } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import MyText from '../components/Texts/MyText';
import SpeakManager from '../util/SpeakManager';
import VoiceManager from '../util/VoiceManager';

class Speak_Ex10 extends Component {

    constructor(props) {
        super(props);

        this.opcionCorrecta = null;

        this.masParecida = [];
        for(let i = 0; i < props.frases.length; i++) {
            this.masParecida[i] = 0;
            if(props.frases[i].esCorrecta) {
                this.opcionCorrecta = i;
            }
        }

        this.correcta = false;

        this.state = {
            pause: false,
            seleccionado: -1
        }

        this.preSpeaking = true;
        this.perdon = "I didn't get that. Could you try again?";
        
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
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

    showbutton = () => {
        if(this.state.seleccionado != -1) {
            this.props.buttonCheck(true);
            
            if(this.opcionCorrecta === this.state.seleccionado) {
                this.correcta = true;
            } else {
                this.correcta = false;
            }
        
        } else {
            this.correcta = false;
            this.props.buttonCheck(false);   
        }
    }

    areSimilar = (fraseStudent, allResults) => {
        this.preSpeaking = false;
        this.setState({seleccionado: -1});

        for(let i = 0; i < allResults.length; i++) {
            for(let j = 0; j < this.props.frases.length && this.state.seleccionado === -1; j++) {
                if(allResults[i].toLowerCase() == this.props.frases[j].frase.toLowerCase()) {
                    this.setState({seleccionado: j});
                } else {
                    // Intentamos buscar la respuesta mas parecida en el caso de que no haya una igual antes
                    let splitRes = allResults[i].split(' ');
                    let splitOrig = this.props.frases[j].frase.split(' ');                    
                    let same = 0;

                    for(let f = 0; f < splitRes.length; f++) {
                        if(splitOrig.includes(splitRes[f])) {
                            same++;
                        }
                    }
                    this.masParecida[j] += same;
                }
            }
        }

        if(this.state.seleccionado === -1) {
            const indexMax = this.masParecida.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
            this.setState({seleccionado: indexMax});
        }

        this.showbutton();
        
        // this.checkAnswer();
    }

    render() {
        return(
            <View style={{ height: '100%', textAlign: 'center'}}>
                <VoiceManager texto={this.props.listening} />

                <RadioButton opciones={this.props.frases} selected={this.state.seleccionado}></RadioButton>

                {
                    !this.preSpeaking && this.state.seleccionado === -1 &&
                    <MyText title={this.perdon} style={{fontSize: 12, color: secundary}}></MyText>
                }
                <SpeakManager studentAnswer={this.areSimilar} casiCorrecta={this.casiCorrecta} loading={true}></SpeakManager>
            </View>    
        );
    }
}

export default Speak_Ex10;