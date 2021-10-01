import React from 'react';
import {View, AppRegistry, Pressable, Dimensions} from 'react-native';
import Voice from 'react-native-voice';
import { cards, primary, secundary } from '../assets/theme/styles';
import RoundButton from '../components/Buttons/RoundButton';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';

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

        this.correct = false;

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

        // Check responses
        this.studentAnswer();
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

    studentAnswer = () => {
        // console.log('quiero enviar', this.state.partialResults);
        this.props.studentAnswer(this.state.partialResults[0]);
    }

    render() {
        return (
            <View style={{height: '100%'}}>
                <View style={{position: 'absolute', top: Dimensions.get('window').height/8, width: '100%', minHeight: 50}}>
                    <MyTitle titleBold="My answer" style={{fontSize: 14, marginBottom: 0}}></MyTitle>
                        
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingVertical: 10, paddingHorizontal: 10, textAlign: 'left', width: '100%', minHeight: 60, marginTop: 20, backgroundColor: 'white', borderRadius: 12, elevation: 10}}>
                            <MyText title={this.state.partialResults} style={{textAlign: 'left', fontSize: 12}}/>
                        </View>

                        {
                            this.props.casiCorrecta[0] != 'O'
                            ? (<MyText title={this.props.casiCorrecta} style={{color: '#00C136', marginTop: 20, textAlign: 'center', width: '100%'}}/>)
                            : (<MyText title={this.props.casiCorrecta} style={{color: secundary, marginTop: 20, textAlign: 'center', width: '100%'}}/>)
                        }

                </View>
                
                <View style={[cards.centrar, {marginTop: 20, position: 'absolute', bottom: 250, width: '100%'}]}>

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
            </View>
        )
    }

}

// que empiece mostrando los resultados parciales pero una vez acabe la grabacion, muestre el correcto

AppRegistry.registerComponent('SpeakManager', () => SpeakManager);