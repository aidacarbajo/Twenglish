import React, {Component} from 'react';
import { ActivityIndicator, View, LogBox } from 'react-native';
import Header from '../components/Header/Header';
import { calculateLevel, calculateMedia } from '../util/ProgressManager';
import { view } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import BlueButton from '../components/Buttons/BlueButton';
import ModalExit from '../components/Modal/ModalExit';
import ModalC from '../components/Modal/ModalC';
import ModalNotificacion from '../components/Modal/ModalNotificacion';
import { updateCurrentLesson } from '../data/queries/lecciones';
import Voc_Ex1 from './Voc_Ex1';
import Voc_Ex2 from './Voc_Ex2';
import Voc_Ex3 from './Voc_Ex3';
import Voc_Ex4 from './Voc_Ex4';
import Voc_Ex5 from './Voc_Ex5';
import Voc_Ex6 from './Voc_Ex6';
import List_Ex7 from './List_Ex7';
import List_Ex8 from './List_Ex8';
import Speak_Ex9 from './Speak_Ex9';
import Speak_Ex10 from './Speak_Ex10';
import { getTest } from '../data/queries/test';
import EStyleSheet, { flatten } from 'react-native-extended-stylesheet';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

class Ejercicios extends Component {

    constructor(props) {
        super(props);
        
        this.acierto = '';

        if(this.props.route.params === undefined) {
            this.nosoyTest = false;
        } else {
            this.nosoyTest = true;
        }
        
        this._isMounted = true;
        
        this.state = {
            vengodeTest: !this.nosoyTest,
            tema: props.route.params != undefined ? props.route.params.tema : null,
            isLoading: true,
            updated: false,
            test: false,
            isExitVisible: false,
            isCheckVisible: false,
            isCorreccionVisible: false,
            isNextVisible: false,
            ejercicioActual: 0,
            ejerciciosLeccionActual: null,
            enunciado: null,
            numIntentos: [0, 0] // [aciertos, fallos] --> en salir(), antes hay que llamar a una funci??n en ??til que se llame calcular para guardar el progreso
        };

        this.correctExercise = this.correctExercise.bind(this);
        this.deleteCorreccion = this.deleteCorreccion.bind(this);
    }

    componentDidMount () {
        if(this.props.route.params === undefined) {
            getTest().then(res => {
                this.setState({numIntentos: [0,0], ejerciciosLeccionActual: res.Ejercicios, enunciado: res.Ejercicios[0].enunciado, test: true, updated: false, isLoading: false})
            })
        } else {
            const lessonId = this.props.route.params.portada;
            updateCurrentLesson(lessonId).then(res => {
                this.setState({numIntentos: [0,0], ejerciciosLeccionActual: res.ejercicios, enunciado: res.ejercicios[0].enunciado, test: false, updated: false, isLoading: false})
            });    
        }
        this._isMounted = false;
    }

    componentWillUnmount () {
        this._isMounted = false;
        this.setState({ 
            isLoading: true,
            isExitVisible: false, 
            updated: true,
            isCheckVisible: false,
            isCorreccionVisible: false,
            isNextVisible: false,
            ejercicioActual: 0,
            ejerciciosLeccionActual: null,
            enunciado: null,
            test: false,
            numIntentos: [0, 0]});
    }

    updateLesson = () => {
        const lessonId = this.props.route.params.portada;

        updateCurrentLesson(lessonId).then(res => {
            this.setState({numIntentos: [0,0], ejerciciosLeccionActual: res.ejercicios, tema:  this.props.route.params != undefined ? this.props.route.params.tema : null, enunciado: res.ejercicios[0].enunciado, test: false, updated: false, isLoading: false})
        });

        this._isMounted = false;
    }


    // Modal ??Estas seguro de que quieres salir?
    modalExit = (visible) => {
        this.setState({isExitVisible: visible});
    }

    salir = () => {
       this.resetear();

        if(this.props.route.params != undefined) {
            this.props.navigation.navigate('Lecciones');
        } else {
            // Volver al pretest
            this.props.navigation.navigate('PreTest');
        }
    }

    // Modal de notificacion
    deleteCorreccion = (visible, correcta) => {
        if(correcta != undefined) {
            if(correcta) {
                this.acierto = 'acierto';
                let num = this.state.numIntentos;
                num[0] = this.state.numIntentos[0] + 1;
                this.setState({isCorreccionVisible: visible, isCheckVisible: false, isNextVisible: true, numIntentos: num});
            } else {
                this.acierto = 'fallo';
                let num = this.state.numIntentos;
                num[1] = this.state.numIntentos[1] + 1;
                this.setState({isCorreccionVisible: visible, isCheckVisible: false, isNextVisible: false, numIntentos: num});
            }
        } else {
            this.setState({isCorreccionVisible: visible});
        }
    }
 
    ////////////////////////////////////////////////////////////////////////
    // cuando corrijo el ejercicio llama a la funcion dos putas veces, socorro
    ///////////////////////////////////////////////////////////////
    
    // corregir el ejercicio 
    showButton = (visible) => {
        if(!this.state.isNextVisible) { // poner && !this.state.isCorreccionVisible
            this.setState({isCheckVisible: visible});
        }
    }

    correctExercise = () => {
        const res = this.child.checkAnswer();
        this.deleteCorreccion(true, res);
    }

    mal = (escorrecta, nextNo) => {
        this.acierto = escorrecta;
        if(escorrecta == 'acierto' && nextNo != undefined) {
            let num = this.state.numIntentos;
            num[0] = this.state.numIntentos[0] + 1;
            this.setState({isCorreccionVisible: true, isNextVisible: nextNo, numIntentos: num});
        } else {
            let num = this.state.numIntentos;
            num[1] = this.state.numIntentos[1] + 1;
            this.setState({isCorreccionVisible: true, isNextVisible: false, numIntentos: num});
        }
    }


    // pasar al siguiente ejercicio
    nextExercise = async() => {
        if(this.state.ejercicioActual < this.state.ejerciciosLeccionActual.length - 1) {
            this.setState({isNextVisible: false, ejercicioActual: this.state.ejercicioActual + 1, isCorreccionVisible: false, enunciado: this.state.ejerciciosLeccionActual[this.state.ejercicioActual + 1].enunciado});
        } else {
            if(this.props.route.params != undefined) {
                // nos llevaria la p??gina de resumen
                const media = await calculateMedia(this.state.numIntentos);  
                this.update();
                this.resetear();
                this.props.navigation.navigate('Resumen', {progreso: media, leccion: this.props.route.params.tema})
            } else {
                const aciertos = this.state.numIntentos[0] + '/' + (this.state.numIntentos[0] + this.state.numIntentos[1]) + ' aciertos';
                const nivel = await calculateLevel(this.state.numIntentos);
                this.resetear();
                this.props.navigation.navigate('Resumen', {progreso: nivel, leccion: aciertos})
            }
        }
    }

    resetear = () => {
        this.setState({ 
            isLoading: true,
            tema: null,
            isExitVisible: false, 
            updated: true,
            isCheckVisible: false,
            isCorreccionVisible: false,
            isNextVisible: false,
            ejercicioActual: 0,
            ejerciciosLeccionActual: null,
            enunciado: null,
            test: false,
            numIntentos: [0, 0]});
    }


    // Completar la pantalla dependiendo del tipo de ejercicio que sea
    getEjercicio = () => {
        if(!this.state.isLoading) {
        const ejercicio = this.state.ejerciciosLeccionActual[this.state.ejercicioActual];
        let res = null;
        switch(ejercicio.tipo) {
            case 1:
                res = <Voc_Ex1 ejercicio={ejercicio.bloqueString} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;
            case 2:
                res = <Voc_Ex2 imagen={ejercicio.bloqueString.imagenes} radioB={ejercicio.bloqueRadioButton} esCorrecta={this.acierto} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;
            case 3:
                res = <Voc_Ex3 everyPar={ejercicio.bloquePares} buttonCheck={this.mal} />
                break;
            case 4:
                res = <Voc_Ex4 frase={ejercicio.bloqueString.frase} radioB={ejercicio.bloqueRadioButton} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;
            case 5:
                res = <Voc_Ex5 frase={ejercicio.bloqueString.frase} unidades={ejercicio.bloqueString.opcionesClave} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;
            case 6:
                res = <Voc_Ex6 frases={ejercicio.bloqueConversacion.frases} persona={ejercicio.bloqueConversacion.persona} opciones={ejercicio.bloqueConversacion.opciones} tiene_opciones={ejercicio.bloqueConversacion.tiene_opciones} buttonCheck={this.mal} onRef={ref => {this.child = ref}} />
                break;
            case 7:
                res = <List_Ex7 imagenes={ejercicio.bloqueRadioButton.opciones} texto={ejercicio.textoListening} buttonCheck={this.mal} onRef={ref => {this.child = ref}} />
                break;
            case 8:
                res = <List_Ex8 radioB={ejercicio.bloqueRadioButton.opciones} texto={ejercicio.textoListening} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;
            case 9:
                res = <Speak_Ex9 frases={ejercicio.bloqueString.opcionesClave} buttonCheck={this.mal} onRef={ref => {this.child = ref}} />
                break;
            case 10:
                res = <Speak_Ex10 listening={ejercicio.textoListening} frases={ejercicio.bloqueRadioButton.opciones} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;    
            }    

        return res;
        }
    }

    update = () => {
        this.props.route.params.update();
    }
 
    render() {
        if(this.props.route.params === undefined) {
            this.nosoyTest = false;
        } else {
            this.nosoyTest = true;
        }

        if((this.state.isLoading && this.nosoyTest && this.state.enunciado === null && this.state.vengodeTest) || (this.props.route.params != undefined && this.state.tema != this.props.route.params.tema)){ 
            this.updateLesson();
        }

        
        if(this._isMounted){            
            if((this.props.route.params != undefined && this.state.updated && this.nosoyTest)) {
                this.updateLesson()
            } 

            return (
                <View>
                    <ActivityIndicator/>
                </View>
            );
        } else {

            return (
                <View style={[{paddingTop: 0, height: '100%'}]}>
                    {/////////////////////////////////////////////////////////
                    /* Cabecera con titulo, acceso a los apuntes y a salir ///
                    ////////////////////////////////////////////////////////*/}
                    <Header salir={this.modalExit} navigation={this.props.navigation} tema={this.props.route.params != undefined ? this.props.route.params.tema : undefined} portada={this.props.route.params != undefined ? this.props.route.params.portada : undefined}></Header>
                    
                    {/* Modal de salir del ejercicio*/
                    <ModalC lessonmodal={this.modalExit} visible={this.state.isExitVisible} tipo={'centro'}>
                        <ModalExit mevoy={this.salir} mequedo={this.modalExit} test={this.props.route.params != undefined ? false : true}></ModalExit>
                    </ModalC>
                    }

                    {/* Modal de acierto/fallo/infoextra*/
                    <ModalC hide={this.deleteCorreccion} visible={this.state.isCorreccionVisible} tipo={'abajo'} tiempoCount={true}>
                        <ModalNotificacion tipo={this.acierto}></ModalNotificacion>
                    </ModalC>
                    }
                    
                    {//////////////////////////
                    /* Contenido importante ///
                    /////////////////////////*/}
                    <View style={[view.safeArea, {width: '100%', height: '85%'}]}>
                        {/* Enunciado del ejercicio */}
                        <MyText title={this.state.enunciado} style={{marginTop: EStyleSheet.value('$20'), textAlign: 'left'}}></MyText>
                        <View>{this.getEjercicio()}</View>
                    </View>

                    <View style={[{position: 'absolute', bottom: 0, padding: EStyleSheet.value('$10')*3, width:'100%'}]} >
                        {/* Boton para comprobar el resultado */}
                        <BlueButton title="Check answer" screen={this.correctExercise} style={[!this.state.isCheckVisible && {display: 'none'}]}></BlueButton>
                        {/* Boton para pasar al siguiente ejercicio, una vez hemos acertado */}
                        <BlueButton title="Next" screen={this.nextExercise} style={[!this.state.isNextVisible && {display: 'none'}]}></BlueButton>
                    </View>
                    
                </View>
            );
        }
    }
}

export default Ejercicios;