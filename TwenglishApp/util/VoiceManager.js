import Tts from 'react-native-tts';
import React, {Component} from 'react';
import { View, Pressable } from 'react-native';
import RoundButton from '../components/Buttons/RoundButton';
import { cards, primary } from '../assets/theme/styles';

class VoiceManager extends Component {
    constructor(props) {
        super(props);
        // Configurar idioma
        Tts.setDefaultLanguage('en-IE');

        // Si hay musica sonando por detras, la para
        Tts.setDucking(true);

        // Sale la tipica lista de todos los idiomas y voces que tiene el movil
        // Tts.requestInstallData();

        this.state = {
            played: false,
            _isMounted: false
        }

        // this.listaVocesRandom = ['en-gb-x-rjs#male_2-local', 'en-us-x-sfg#female_3-local', "en-us-x-sfg#male_2-local", 'en-gb-x-fis#female_3-local']

        Tts.addEventListener('tts-start', event => {
            this.setState({played: true})
        });
        Tts.addEventListener('tts-finish', event => {
            this.setState({played: false})
        });
        // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

        // Tts.voices().then(voices => console.log(voices));
        // Tts.engines().then(engines => console.log(engines));

        // Tts.setDefaultPitch(1.2);  // Voz grave o de pito
        // Tts.setDefaultRate(0.6);    // Rapidez: entre 0.4 y 0.6 es algo aceptable
    }

    componentDidMount() {
        this.setState({_isMounted: true});
    }

    componentWillUnmount() {
        this.setState({_isMounted: false});
    }
    
    listenToAudio = () => {
        // const random = Math.floor(Math.random() * (this.listaVocesRandom.length));
        // Tts.setDefaultVoice(this.listaVocesRandom[random] || 'default')
        // .catch((e) => {
            // Tts.setDefaultVoice('default')
        // });

        Tts.stop();
        Tts.speak(this.props.texto);
    }

    render() {
        return (
            <View style={[cards.centrar, {marginTop: 20}]}>
                {
                    this.state._isMounted &&
                        <Pressable onPress = {() => this.listenToAudio()}>
                        {
                            this.state.played
                                ? <RoundButton key={'2'} icon="listen" color={primary} style={false} size={60}></RoundButton>
                                : <RoundButton key={'3'} icon="listen" color={'white'} style={true} size={60}></RoundButton>
                        }
                        </Pressable>
                    }
                
            </View>
        )
    }
}

export default VoiceManager;