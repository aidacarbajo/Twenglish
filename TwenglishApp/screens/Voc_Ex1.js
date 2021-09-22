import React, {Component} from 'react';
import { ActivityIndicator, ImageBackground, Pressable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { bold, cards } from '../assets/theme/styles';
import { getImage } from '../util/ImageManager';
import Tag from '../components/Card/Tag';
import MyTitle from '../components/Texts/MyTitle';

class Voc_Ex1 extends Component {

    constructor(props) {
        super(props);
        
        this.respuestasUsuario = ['', '', '', ''];

        // crear otro array llamado fotos desordenadas
        // Si antes era:    [a, b, c, d]
        // Ahora es:        [b, d, c, a]
        // Para ver si está bien tendré q coger el indice de p.e. "a" (3) en el de antes (0), y comprobar que respuestasUsuario(3) == opcionesClave(0)

        const frases = props.ejercicio.frase;
        const opcionesClave = props.ejercicio.opcionesClave;        
        const imagenes = JSON.parse(JSON.stringify(props.ejercicio.imagenes));
        const desordenado = [...imagenes].sort(() => {return Math.random() - 0.5});

        const data = {
                        frases: frases.split('"'), 
                        portada: imagenes,
                        portadaDesordenada: desordenado,
                        palabraClave: opcionesClave,
                    }

        this.state = {
            isLoading: false,
            dataRealm: data,
            pressed: [false, false, false, false],
            actual: 0
        };

        this.isPressed = this.isPressed.bind(this);
        this.list = this.list.bind(this);
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

    getEjercicio = () => {
    
    }

    isPressed = (index, refreshh) => {
        if(this.state.actual < this.state.pressed.length) {
            this.respuestasUsuario[index] = this.state.dataRealm.palabraClave[this.state.actual]

            let arrayPressed = [...this.state.pressed];
            arrayPressed[index] = true;

            this.setState({pressed: arrayPressed, actual: this.state.actual + 1}); 
            
            if(this.state.actual === this.state.pressed.length - 1) {
                this.props.buttonCheck(true);
            }
        }
    }

    list = () => {    
        const data = this.state.dataRealm;

        return (
            this.state.actual < data.palabraClave.length - 1
            ? <MyTitle title={data.frases[this.state.actual]} style={{fontSize: 12, fontFamily: bold, marginVertical: 15}} destacar={[data.palabraClave[this.state.actual]]}></MyTitle>
            : <MyTitle title={data.frases[data.frases.length - 1]} style={{fontSize: 12, fontFamily: bold, marginVertical: 15}} destacar={[data.palabraClave[data.palabraClave.length - 1]]}></MyTitle>
        )  
    };

    checkAnswer = () => {
        const pd = this.state.dataRealm.portadaDesordenada;
        const ru = this.respuestasUsuario;

        const po = this.state.dataRealm.portada;
        const pc = this.state.dataRealm.palabraClave;

        let pos = [];   // se guardan las posiciones cuando coinciden las dos portadas para saber luego que comparar

        po.forEach((element, i) => {
            pos.push(po.findIndex((element) => element == pd[i]));
        })

        let c = 0, iguales = true;
        for(let i = 0; i<ru.length && iguales; i++) {
            if(ru[i] != pc[pos[c]]) {
                iguales = false;
                break;
            }
            c++;
        }

        // si no son iguales borramos de nuevo las etiquetas de las fotos y aparece la primera frase
        if(!iguales) {
            this.props.buttonCheck(false);
            setTimeout(() => {
                this.setState({pressed: [false, false, false, false], actual: 0})
            }, 3000);
        }

        return iguales;        
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
                <View>
                    <View>{this.list()}</View>
                    <FlatList
                        style={{paddingHorizontal: cards.padding.paddingHorizontal, paddingVertical: 20}}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        showsVerticalScrollIndicator={false}
                        data={this.state.dataRealm.frases}
                        keyExtractor={(item, index) => index }
                        renderItem={(item, index) => 
                            <View style={[cards.card, cards.dimensions]}>
                                <Pressable style={cards.back} onPress={() => this.isPressed(item.index)}>         
                                    <View style={[cards.dimensions]}>
                                        <ImageBackground 
                                            source={getImage(this.state.dataRealm.portadaDesordenada[item.index])} 
                                            resizeMode="cover" 
                                            style={[cards.image]} 
                                            imageStyle={{ borderRadius: 12}}
                                        >
                                            {this.state.pressed[item.index] === true && (
                                                <Tag dataTitle={this.respuestasUsuario[item.index]}></Tag>
                                            )}

                                        </ImageBackground> 
                                    </View>
                                </Pressable>
                            </View>
                        }>
                    </FlatList>                    
                </View>
            );
        }
    }
}

export default Voc_Ex1;