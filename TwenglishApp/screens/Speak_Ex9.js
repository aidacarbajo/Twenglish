import React, {Component} from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { bold, example } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';
import SpeakManager from '../util/SpeakManager';

class Speak_Ex9 extends Component {

    constructor(props) {
        super(props);

        // [ingles, traduccion]
        this.frases = props.frases;  
        this.fraseCorrecta = props.frases[0];
        this.respuestaUsuario = '';   
        this.correcta = false;
        this.casiCorrecta = ''; 
        
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    checkAnswer = () => {
        if(this.casiCorrecta[0] != 'O') {
            this.props.buttonCheck('acierto', true);
            return true;
        } else {
            this.props.buttonCheck('fallo');
            return false;
        }
    }

    areSimilar = (fraseStudent, allResults) => {
        const pxpS = fraseStudent.split(' ');
        const pxpC = this.fraseCorrecta.split(' ');

        if(JSON.stringify(pxpC) === JSON.stringify(pxpS)) {
            this.correcta = true;
            this.casiCorrecta = '';
        } else {
            this.correcta = false;
        }

        if(!this.correcta) {
            let same = 0;

            for(let i = 0; i < pxpS.length; i++) {
                if(pxpS[i] == pxpC[i]) {
                    same++;
                }
            }

            // MARGEN DE ERROR: Si acierta 1/4 de la frase se pone como correcto
            if(same >= pxpC.length/1.5) {   
                this.casiCorrecta = 'Almost perfect! ' + same + '/' + pxpC.length + ' words are correct';
            } else {
                this.casiCorrecta = 'Oops! Only ' + same + '/' + pxpC.length + ' words are correct';
            }
        }
        this.checkAnswer();
    }

    render() {
        return(
            <View style={{ height: '100%'}}>
                <View>
                    <MyTitle title={this.frases[0]} style={{fontSize: 11, fontFamily: bold, marginTop: EStyleSheet.value('$10')*4}} />
                    <MyText title={this.frases[1]} style={{fontSize: EStyleSheet.value('$10')*5, marginTop: -EStyleSheet.value('$10'), color: example}}/>
                </View>

                <SpeakManager studentAnswer={this.areSimilar} casiCorrecta={this.casiCorrecta}></SpeakManager>
                
            </View>    
        );
    }
}

export default Speak_Ex9;