import React, {Component} from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { bold, cards } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';

class Voc_Ex5 extends Component {

    constructor(props) {
        super(props);

        this.frase = props.frase;

        this.unidades = props.unidades;
        this.todosDesordenados = [...props.unidades].sort(() => {return Math.random() - 0.5});
        let hide = [], respu = [];
        [...props.unidades].map(() => {hide.push(false), respu.push('')});

        console.log('length', respu.length);

        this.state = {
            respuestasUsuario: respu,
            respuestaFrase: '',
            hideWord: hide
        }

        // this.correcta = false;
    }

    shouldComponentUpdate(nextProps, nextState) {                                     
        return true;                      
    }

    iguales = (x, first, last) => {
        if((x.par[0] == this.todosDesordenados[first] && this.todosDesordenados[last] == x.par[1])
         || (x.par[0] == this.todosDesordenados[last] && this.todosDesordenados[first] == x.par[1])) {
            return true;
        }
        return false;
    }

    checkAnswer = (first, last) => {
        const xx = this.pares.filter(x => this.iguales(x, first, last)); // Returns [10, 6]
        
        if(xx.length > 0) {
            return true;
        } else {
            return false;
        } 
    }

    seleccion = (word, index) => {
        let u = this.state.respuestasUsuario;
        u[index] = word;

        let h = this.state.hideWord;
        h[index] = true;

        console.log(h);
        
        this.setState({respuestasUsuario: u, hideWord: h})
    }

    deseleccion = (word, index) => {
        let h = this.state.hideWord;
        h[index] = false;

        console.log(h);

        let u = this.state.respuestasUsuario;

        u[index] = "";
        


        // let u = this.state.respuestasUsuario;
        // u.push(word);

        this.setState({respuestasUsuario: u, hideWord: h})
    }

    getCard = (word, index, accion) => {
        return(
            <Pressable key={index} style={[cards.cards, cards.centrar, {padding: 10, marginBottom: 10, marginRight: 6}]} onPress={() => {
                if(accion === 's') {
                    this.seleccion(word, index)
                } else {
                    this.deseleccion(word, index)}
                }
            }>
                <MyText title={word} style={{fontSize: 12}}></MyText>
            </Pressable>
        );
    }

    render() {
        return (
            <View style={{marginTop: 20, height: '100%'}}>
            
                <MyTitle title={this.frase + '.'} style={{fontSize: 12, fontFamily: bold, marginBottom: 4}}></MyTitle>

                <View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'center', width: '100%', marginTop: 20}}>
                        {
                            this.state.respuestasUsuario.map((item, index) => {
                                if(item != '') {
                                    return this.getCard(item, index, 'd')
                                }
                            })

                        }
                    </View>
                </View>
                {
                    this.state.respuestasUsuario.includes('') ? (
                        <View style={{position: 'absolute', top: 300, width: '100%'}}>
                            <MyTitle titleBold="Options" style={{fontSize: 14, marginBottom: 0}}></MyTitle>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingTop: 10, paddingHorizontal: 10, textAlign: 'center', width: '100%', marginTop: 30, backgroundColor: 'white', borderRadius: 12}}>
                            {
                                this.todosDesordenados.map((item, index) => {
                                    if(!this.state.hideWord[index]) {
                                        return this.getCard(item, index, 's')
                                    }
                                })
                            }
                            </View>

                        </View>

                    )
                    : (
                        console.log('Check')
                    )
                }
                
                
            </View>
        );
    }
    
}

export default Voc_Ex5;