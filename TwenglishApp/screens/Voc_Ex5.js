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
        this.fraseCorrecta = [...this.unidades].join(' ');

        this.todosDesordenados = [...props.unidades].sort(() => {return Math.random() - 0.5});
        this.desordenados = this.todosDesordenados;

        this.hide = [];
        this.respu = [];

        [...props.unidades].map(() => {this.hide.push(false), this.respu.push(-1)});

        this.state = {
            respuestasUsuario: [...this.respu],
            respuestaFrase: '',
            hideWord: [...this.hide]
        }

        this.correcta = false;
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

    iguales = (x, first, last) => {
        if((x.par[0] == this.todosDesordenados[first] && this.todosDesordenados[last] == x.par[1])
         || (x.par[0] == this.todosDesordenados[last] && this.todosDesordenados[first] == x.par[1])) {
            return true;
        }
        return false;
    }

    checkAnswer = () => {
        const u = this.state.respuestasUsuario;

        let a = [];
        
        u.map((x) => {
            a.push(this.desordenados[x])
        })

        const resUser = a.join(' ');
        
        if(resUser === this.fraseCorrecta) {
            this.correcta = true;
        } else {
            this.correcta = false;
            this.props.buttonCheck(false);

            this.setState({respuestasUsuario: this.respu, hideWord: this.hide});
        }
        // console.log('correcta', this.correcta);
        return this.correcta;
    }

    showCheck = () => {
        this.props.buttonCheck('acierto');
    }

    seleccion = (index) => {
        let u = this.state.respuestasUsuario;

        const i = u.indexOf(-1);
        u[i] = index;

        let h = this.state.hideWord;
        h[index] = true;
        
        this.setState({respuestasUsuario: u, hideWord: h});

        // Si ya ha seleccionado todos...
        if(!this.state.respuestasUsuario.includes(-1)) {
            this.showCheck();
        }
    }

    deseleccion = (index, indexx) => {
        let h = this.state.hideWord;
        h[index] = false;

        let u = this.state.respuestasUsuario;
        u.splice(indexx, 1);
        u.push(-1);
        
        this.setState({respuestasUsuario: u, hideWord: h})
    }

    getCard = (index, accion, indexx) => {        
        return(
            <Pressable key={index} style={[cards.cards, cards.centrar, {padding: 10, marginBottom: 10, marginRight: 6}]} onPress={() => {
                if(accion === 's') {
                    this.seleccion(index)
                } else {
                    this.deseleccion(index, indexx)}
                }
            }>
            { accion === 's' 
                ? <MyText title={this.todosDesordenados[index]} style={{fontSize: 12}}></MyText>
                : <MyText title={this.desordenados[index]} style={{fontSize: 12}}></MyText>
            }
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
                                if(item != -1) {
                                    return this.getCard(item, 'd', index)
                                }
                            })

                        }
                    </View>
                </View>

                <View style={{position: 'absolute', top: 250, width: '100%', minHeight: 50}}>
                    <MyTitle titleBold="Options" style={{fontSize: 14, marginBottom: 0}}></MyTitle>
                        
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingTop: 10, paddingHorizontal: 10, textAlign: 'center', width: '100%', minHeight: 55, marginTop: 20, backgroundColor: 'white', borderRadius: 12}}>
                        {
                            this.todosDesordenados.map((item, index) => {
                                if(!this.state.hideWord[index]) {
                                    return this.getCard(index, 's')
                                }
                            })
                        }
                        </View>

                </View>

                
            </View>
        );
    }
    
}

export default Voc_Ex5;