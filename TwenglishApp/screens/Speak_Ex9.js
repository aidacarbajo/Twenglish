import React, {Component} from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { bold, cards, example, primary } from '../assets/theme/styles';
import RoundButton from '../components/Buttons/RoundButton';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';

class Speak_Ex9 extends Component {

    constructor(props) {
        super(props);

        // [ingles, traduccion]
        this.frases = props.frases;  
        this.respuestaUsuario = '';    

        this.state = {
            pressed: false
        }
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

    recordVoice = () => {
        console.log('Start grabacion');
        this.setState({pressed: true});
    }

    stopRecord = () => {
        console.log('Parar grabacion');
        this.setState({pressed: false});
    }

    render() {
        return(
            <View style={{ height: '100%'}}>
                <View>
                    <MyTitle title={this.frases[0]} style={{fontSize: 12, fontFamily: bold, marginTop: 40}} />
                    <MyText title={this.frases[1]} style={{fontSize: 12, marginTop: -10, color: example}}/>
                </View>


                <View style={[cards.centrar, {marginTop: 20, position: 'absolute', bottom: 150, width: '100%'}]}>
                    <Pressable onPressIn={() => this.recordVoice()} onPressOut={() => this.stopRecord()}>
                        {
                            this.state.pressed
                                ? <RoundButton key={0} icon="micro" color={primary} style={false}></RoundButton>
                                : <RoundButton key={1} icon="micro" color={'white'} style={true}></RoundButton>
                        }
                    </Pressable>
                    <MyText title="Press to record your voice" style={{fontSize: 12, marginTop: 10}}/>
                </View>
                
            </View>    
        );
    }
}

export default Speak_Ex9;