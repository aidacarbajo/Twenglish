import React from 'react';
import {View, AppRegistry, Pressable} from 'react-native';
import Voice from 'react-native-voice';
import { cards, primary } from '../assets/theme/styles';
import RoundButton from '../components/Buttons/RoundButton';
import MyText from '../components/Texts/MyText';

const ERROR_MSG_NO_SPEECH = Platform.OS === 'ios' ? '203/Retry' : '7/No match';

export default class SpeakManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRecord: false,
            pressed: false,
            recognized: '',
            started: 'X',
            error: '-',
            results: [],
            partialResults: []
        };

        this.seeConfig();

        Voice.onSpeechStart = this._onSpeechStart.bind(this);  
        Voice.onSpeechRecognized = this._onSpeechRecognized.bind(this);
        Voice.onSpeechEnd = this._onSpeechEnd.bind(this);
        Voice.onSpeechResults = this._onSpeechResults.bind(this);
        Voice.onSpeechPartialResults = this._onSpeechPartialResults.bind(this);

        Voice.onSpeechError =this. _onSpeechError.bind(this);  
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    seeConfig = async() => {
        const isAvailable = await Voice.isAvailable();
        const isRecognizing = await Voice.isRecognizing();
        let speechServicesAndroid = undefined;
        if (Platform.OS === 'android') {
            speechServicesAndroid = await Voice.getSpeechRecognitionServices();
        }
        this.setState({recognized: speechServicesAndroid});
        // console.log(isAvailable, isRecognizing, speechServicesAndroid);
    }

    _onSpeechStart = (event) => {
        // console.log('Empezar a grabar', event);
        this.setState({started: '√'})
    };
    _onSpeechRecognized = (event) => {
        // console.log('Recnognized', event);
        this.setState({recognized: '√'});
    }

     _onSpeechEnd = () => {
        // console.log('Finalizar grabacion');
        this.setState({started: 'X', pressed: false, isRecord: !this.state.isRecord});

        console.log(this.state);
        if(this.state.partialResults.length === 0) {
            Voice.stop();
        }
    };

    _onSpeechResults = (event) => {
        // console.log('onSpeechResults');
        // console.log(event.value)
        this.setState({results: event.value});
    };
    _onSpeechPartialResults = (event) => {
        // console.log('onSpeechPartialResults');
        // console.log(event.value);
        this.setState({partialResults: event.value});
    };

    _onSpeechError = (error) => {
        // console.log(error.error);
        this.setState({error: JSON.stringify(error.error), pressed: false, started: 'X'});
        Voice.destroy().then(Voice.removeAllListeners());
    };

    _startRecognition() {
        if(!this.state.isRecord) {
            this.setState({
                started: 'X',
                results: [],
                partialResults: [],
                text: '',
                error: '-'
            });
            try {
                this.setState({pressed: true, isRecord: !this.state.isRecord});
                Voice.start('en-US',{
                    // "RECOGNIZER_ENGINE": "GOOGLE",
                    "EXTRA_PARTIAL_RESULTS": true
                });
            } catch (e) {
                console.error('Error', e);
            }
        }
    }

    getText() {
        let titulo = "Press to record your voice";

        if(this.state.pressed) {
            titulo = "Recording...";
        }

        return(
            <MyText title={titulo} style={{fontSize: 12, marginTop: 10}}/>
        );
    }

    render() {
        return (
            <View style={[cards.centrar, {marginTop: 20, position: 'absolute', bottom: 150, width: '100%'}]}>
                <MyText title={'Resultados parciales: ' + this.state.partialResults} style={{marginBottom: 40}}/>

                <Pressable onPressIn={this._startRecognition.bind(this)}>
                    {
                        this.state.pressed
                            ? <RoundButton key={0} icon="micro" color={primary} style={false}></RoundButton>
                            : <RoundButton key={1} icon="micro" color={'white'} style={true}></RoundButton>
                    }
                </Pressable>
                {
                    this.getText()
                }
            </View>
        )
    }

}

// que empiece mostrando los resultados parciales pero una vez acabe la grabacion, muestre el correcto

AppRegistry.registerComponent('SpeakManager', () => SpeakManager);