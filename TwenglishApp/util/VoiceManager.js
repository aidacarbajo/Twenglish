import Tts from 'react-native-tts';
import React, {Component} from 'react';
import { View, Pressable } from 'react-native';
import RoundButton from '../components/Buttons/RoundButton';
import { cards, primary } from '../assets/theme/styles';

class VoiceManager extends Component {
    constructor(props) {
        super(props);
        // Tts.engines().then(engines => console.log(engines));

        // Configurar sonido
        Tts.setDefaultLanguage('en-IE');

        // Si hay musica sonando por detras, la para
        Tts.setDucking(true);

        // Sale la tipica lista de todos los idiomas y voces que tiene el movil
        // Tts.requestInstallData();

        this.listaVocesRandom = ['en-gb-x-rjs#male_2-local', 'en-us-x-sfg#female_3-local', "en-us-x-sfg#male_2-local", 'en-gb-x-fis#female_3-local']

        // Tts.addEventListener('tts-start', event => console.log('start', event));
        // Tts.addEventListener('tts-finish', event => console.log('finish', event));
        // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
        // Tts.voices().then(voices => console.log(voices));
        // Tts.setDefaultPitch(1.2);  // Voz grave o de pito
        // Tts.setDefaultRate(0.6);    // Rapidez: entre 0.4 y 0.6 es algo aceptable
    }
    
    listenToAudio = () => {
        const random = Math.floor(Math.random() * (this.listaVocesRandom.length));
        Tts.setDefaultVoice(this.listaVocesRandom[random]);

        Tts.stop();
        Tts.speak(this.props.texto);
    }

    render() {
        return (
            <View style={[cards.centrar, {marginTop: 20}]}>
                <Pressable onPress = {() => this.listenToAudio()}>
                    <RoundButton icon="listen" color={primary} style={true}></RoundButton>
                </Pressable>
            </View>
        )
    }
}

export default VoiceManager;