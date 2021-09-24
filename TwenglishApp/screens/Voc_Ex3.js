import React, {Component} from 'react';
import { Pressable, View } from 'react-native';
import { cards } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';

class Voc_Ex3 extends Component {

    constructor(props) {
        super(props);
        
        this.pares = [...props.everyPar.pares];
        this.par1 = [], this.par2 = [], this.seleccionUsuario = [];

        this.pares.map(el => {
            this.par1.push(el.par[0]);
            this.par2.push(el.par[1]);
            this.seleccionUsuario.push('', '');       // cuando 'y' == correcto o selected; cuando 'n' incorrecto
        })

        this.desordenado1 = this.par1.sort(() => {return Math.random() - 0.5});
        this.desordenado2 = this.par2.sort(() => {return Math.random() - 0.5});

        this.state = {
            seleccionado: this.seleccionUsuario
        }
        // this.showCheck = this.showCheck.bind();
        // this.checkAnswer = this.checkAnswer.bind();
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
            // setTimeout(() => {
                this.correcta = false;
            // }, 3000);
        }
        return this.correcta;      
    }


    seleccion = (columna) => {
        let c = this.state.seleccionado;
        // console.log(columna);
        c[columna] = 's';

        this.setState({seleccionado: c});

        // Cada dos 's' comprobar que son correctos o no
        // Si son correctos sustituitlo por 'c'
        // Si es incorrecto mostrar el modal de error y quitar las 's'

    }



    getCard = (pos, array) => {
        let c; 
        let poss;

        if(array % 2 == 1) {
            c = this.desordenado2;
            poss = pos * 2 + 1;
        }   else {
            c = this.desordenado1;
            poss = pos * 2;
        }
        
        return(
            <Pressable style={[cards.cards, cards.cardPares, cards.centrar, this.state.seleccionado[poss] == 's' && cards.selected]} onPress={() => this.seleccion(poss)}>
                <MyText title={c[pos]}></MyText>
            </Pressable>
        );
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
            {
                this.pares.map((item, index) => {
                    return (
                        <View key={index} style={{flexDirection: 'row', height: 70, justifyContent: 'space-between', textAlign: 'center', marginBottom: 20}}>
                            {this.getCard(index, 0)}
                            {this.getCard(index, 1)}
                        </View>
                    );        
                })
            }
            </View>
        );
    }
    
}

export default Voc_Ex3;