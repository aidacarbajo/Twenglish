import React, {Component} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { cards } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import MyText from '../components/Texts/MyText';

class Voc_Ex4 extends Component {

    constructor(props) {
        super(props);
        
        this.frase = props.frase;
        this.opcioness = props.radioB.opciones;
        this.opciones = JSON.parse(JSON.stringify(this.opcioness));

        this.correcta = false;

        this.state = {
            isLoading: false,
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
                        <MyText title={this.frase} style={{fontSize: 12, textAlign: 'left', padding: 4}}></MyText>
                    </View>

                    <RadioButton opciones={this.opciones} check={this.showCheck}></RadioButton>
                </View>
            );
        }
    }
}

export default Voc_Ex4;