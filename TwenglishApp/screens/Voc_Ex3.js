import React, {Component} from 'react';
import { Pressable, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { cards } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';

class Voc_Ex3 extends Component {

    constructor(props) {
        super(props);
        
        let pares = [...props.everyPar.pares];
        let desordenados = []; let seleccionUsuario = [];

        pares.map(el => {
            desordenados.push(el.par[0], el.par[1]);
            seleccionUsuario.push('', '');       // cuando 'c' == correcto o selected; cuando 'n' incorrecto
        })

        this.state = {
            seleccionado: seleccionUsuario,
            pares: pares,
            todosDesordenados: desordenados.sort(() => {return Math.random() - 0.5})
        }

        this.correcta = false;
    }

    shouldComponentUpdate(nextProps, nextState) {                                     
        return true;                      
    }

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.everyPar.pares[0].par[0] != state.pares[0].par[0]) {
            let pares = [...nextProps.everyPar.pares];
            let desordenados = []; let seleccionUsuario = [];
    
            pares.map(el => {
                desordenados.push(el.par[0], el.par[1]);
                seleccionUsuario.push('', '');       // cuando 'c' == correcto o selected; cuando 'n' incorrecto
            })
    
            return {
                seleccionado: seleccionUsuario,
                pares: pares,
                todosDesordenados: desordenados.sort(() => {return Math.random() - 0.5})
            }
        }
        
        return null;
    }

    iguales = (x, first, last) => {
        if((x.par[0] == this.state.todosDesordenados[first] && this.state.todosDesordenados[last] == x.par[1])
         || (x.par[0] == this.state.todosDesordenados[last] && this.state.todosDesordenados[first] == x.par[1])) {
            return true;
        }
        return false;
    }

    checkAnswer = (first, last) => {
        const xx = this.state.pares.filter(x => this.iguales(x, first, last)); // Returns [10, 6]
        
        if(xx.length > 0) {
            return true;
        } else {
            return false;
        } 
    }

    seleccion = (columna) => {
        let c = this.state.seleccionado;

        if(c[columna] != 's' && c[columna] != 'c') {
            c[columna] = 's';

            this.setState({seleccionado: c});

            const cuantasS = c.indexOf('s');
            const cuantasL = c.lastIndexOf('s');

            // Cada dos 's' comprobar que son correctos o no
            if(cuantasS != cuantasL) {
                const esCorrecta = this.checkAnswer(cuantasS, cuantasL);

                // Si son incorrectos sustituitlo por '' y mostrar el modal
                if(!esCorrecta) {
                    c[cuantasL] = 'n';
                    c[cuantasS] = 'n';
                    
                    this.setState({seleccionado: c});

                    this.props.buttonCheck('fallo', false);

                    setTimeout(() => {
                        // Eliminar LAS N
                        const N1 = c.indexOf('n');
                        const N2 = c.lastIndexOf('n');
                        c[N1] = ''; c[N2] = '';
                        this.setState({seleccionado: c})
                    }, 500);
                } else {
                    // Si es correcto mostrar el modal de error y quitar las 's'    
                    c[cuantasL] = 'c';
                    c[cuantasS] = 'c';
                    this.setState({seleccionado: c});

                    if(c.filter(x=> x == 'c').length == this.state.seleccionado.length) {
                        this.props.buttonCheck('acierto', true);

                    }
                }

            } 
    
        } else {
            if(c[columna] != 'c') {
                c[columna] = '';
                this.setState({seleccionado: c});    
            }
        }
    }

    getCard = (pos) => {
        return(
            <Pressable style={[cards.cards, cards.cardPares, cards.centrar, this.state.seleccionado[pos] == 's' ? cards.selected : [this.state.seleccionado[pos] == 'c' ? cards.correct : [this.state.seleccionado[pos] == 'n' && cards.incorrect]]]} onPress={() => this.seleccion(pos)}>
                <MyText title={this.state.todosDesordenados[pos]} style={{lineHeight: EStyleSheet.value('$10'), fontSize: EStyleSheet.value('$10')}}></MyText>
            </Pressable>
        );
    }

    render() {
        return (
            <View style={{marginTop: EStyleSheet.value('$20')}}>
            {
                this.state.todosDesordenados.map((item, index) => {
                    return (
                        index % 2 == 0 && (
                        <View key={index} style={{flexDirection: 'row', height: EStyleSheet.value('$10')*7, justifyContent: 'space-between', textAlign: 'center', marginBottom: EStyleSheet.value('$20')}}>
                            {this.getCard(index)}
                            {this.getCard(index + 1)}
                        </View>
                    ));        
                })
            }
            </View>
        );
    }
    
}

export default Voc_Ex3;