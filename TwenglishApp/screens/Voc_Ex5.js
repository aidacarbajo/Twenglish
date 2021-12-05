import React, {Component} from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { bold, cards } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';

class Voc_Ex5 extends Component {

    constructor(props) {
        super(props);

        const todosDesordenados = [...props.unidades].sort(() => {return Math.random() - 0.5});
        const desordenados = todosDesordenados;

        let hide = [];
        let respu = [];

        [...props.unidades].map(() => {hide.push(false), respu.push(-1)});

        this.state = {
            frase: props.frase,
            fraseCorrecta: [...props.unidades].join(' '),
            todosDesordenados: todosDesordenados,
            desordenados: desordenados,
            respuestasUsuario: [...respu],
            respuestaFrase: '',
            respu: respu,
            hide: hide,
            hideWord: [...hide]
        }

        this.correcta = false;
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.frase != state.frase) {
            const todosDesordenados = [...nextProps.unidades].sort(() => {return Math.random() - 0.5});
            const desordenados = todosDesordenados;

            let hide = [];
            let respu = [];
    
            [...nextProps.unidades].map(() => {hide.push(false), respu.push(-1)});
    
            return {
                frase: nextProps.frase,
                fraseCorrecta: [...nextProps.unidades].join(' '),
                todosDesordenados: todosDesordenados,
                desordenados: desordenados,
                respuestasUsuario: [...respu],
                respuestaFrase: '',
                hide: hide,
                respu: respu,
                hideWord: [...hide]
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

    checkAnswer = () => {
        const u = this.state.respuestasUsuario;

        let a = [];
        
        u.map((x) => {
            a.push(this.state.desordenados[x])
        })

        const resUser = a.join(' ');
        
        if(resUser === this.state.fraseCorrecta) {
            this.correcta = true;
        } else {
            this.correcta = false;
            this.props.buttonCheck(false);

            this.setState({respuestasUsuario: this.state.respu, hideWord: this.state.hide});
        }
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
            <Pressable key={index} style={[cards.cards, cards.centrar, {padding: EStyleSheet.value('$10'), marginBottom: EStyleSheet.value('$10'), marginRight: EStyleSheet.value('$10')}]} onPress={() => {
                if(accion === 's') {
                    this.seleccion(index)
                } else {
                    this.deseleccion(index, indexx)}
                }
            }>
            { accion === 's' 
                ? <MyText title={this.state.todosDesordenados[index]}></MyText>
                : <MyText title={this.state.desordenados[index]}></MyText>
            }
            </Pressable>
        );
    }

    render() {
        return (
            <View style={{marginTop: EStyleSheet.value('$20'), height: '100%'}}>
            
                <MyTitle title={this.state.frase + '.'} style={{fontSize: EStyleSheet.value('$bodySize'), fontFamily: bold, marginBottom: EStyleSheet.value('$5')}}></MyTitle>

                <View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'center', width: '100%', marginTop: EStyleSheet.value('$20')}}>
                        {
                            this.state.respuestasUsuario.map((item, index) => {
                                if(item != -1) {
                                    return this.getCard(item, 'd', index)
                                }
                            })

                        }
                    </View>
                </View>

                <View style={{position: 'absolute', bottom: EStyleSheet.value('$20')*10, width: '100%', minHeight: EStyleSheet.value('$10')*5}}>
                    <MyTitle titleBold="Options" style={{fontSize: EStyleSheet.value('$bodySize'), marginBottom: 0}}></MyTitle>
                        
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingTop: EStyleSheet.value('$10'), paddingHorizontal: EStyleSheet.value('$10'), textAlign: 'center', width: '100%', minHeight: EStyleSheet.value('$10')*5 + EStyleSheet.value('$5'), marginTop: EStyleSheet.value('$20'), backgroundColor: 'white', borderRadius: EStyleSheet.value('$10')}}>
                        {
                            this.state.todosDesordenados.map((item, index) => {
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