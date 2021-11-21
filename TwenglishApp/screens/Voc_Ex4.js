import React, {Component} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { cards } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import MyText from '../components/Texts/MyText';

class Voc_Ex4 extends Component {

    constructor(props) {
        super(props);
        
        const opcioness = props.radioB.opciones;
        const opciones = JSON.parse(JSON.stringify(opcioness));

        this.correcta = false;

        this.state = {
            isLoading: false,
            frase: props.frase,
            opciones:opciones
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

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.frase != state.frase) {
            const opcioness = nextProps.radioB.opciones;
            const opciones = JSON.parse(JSON.stringify(opcioness));
            
            return {
                opciones: opciones,
                frase: nextProps.frase
            }
          }
          return null;
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
                <View style={{marginTop: 20}}>
                    <View style={[cards.cardApuntes, cards.cards]}>
                        <MyText title={this.state.frase} style={{fontSize: 11, textAlign: 'left', padding: 4, lineHeight: 18}}></MyText>
                    </View>

                    <RadioButton opciones={this.state.opciones} check={this.showCheck}></RadioButton>
                </View>
            );
        }
    }
}

export default Voc_Ex4;