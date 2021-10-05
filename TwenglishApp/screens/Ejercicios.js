import React, {Component} from 'react';
import { ActivityIndicator, View, LogBox } from 'react-native';
import Header from '../components/Header/Header';
import { calculateMedia } from '../util/ProgressManager';
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

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

class Ejercicios extends Component {

    constructor(props) {
        super(props);
        
        this.acierto = '';
        
        this.numIntentos = [0, 0];       // [aciertos, fallos] --> en salir(), antes hay que llamar a una función en útil que se llame calcular para guardar el progreso

        this.state = {
            isLoading: true,
            isExitVisible: false,
            isCheckVisible: false,
            isCorreccionVisible: false,
            isNextVisible: false,
            ejercicioActual: 9,
            ejerciciosLeccionActual: null,
            enunciado: null,
        };

        this.correctExercise = this.correctExercise.bind(this);
        this.deleteCorreccion = this.deleteCorreccion.bind(this);
    }

    componentDidMount () {
        const lessonId = this.props.route.params.portada;
        updateCurrentLesson(lessonId).then(res => {
            this.setState({ejerciciosLeccionActual: res.ejercicios, enunciado: res.ejercicios[this.state.ejercicioActual].enunciado, isLoading: false})
        });
    }

    // Modal ¿Estas seguro de que quieres salir?
    modalExit = (visible) => {
        this.setState({isExitVisible: visible});
    }

    salir = async() => {
        this.setState({isExitVisible: false});
        this.props.navigation.navigate('Lessons');
    }

    // Modal de notificacion
    deleteCorreccion = (visible, correcta) => {
        if(correcta != undefined) {
            if(correcta) {
                this.acierto = 'acierto';
                this.numIntentos[0] = this.numIntentos[0] + 1;
                this.setState({isCorreccionVisible: visible, isCheckVisible: false, isNextVisible: true});
            } else {
                this.acierto = 'fallo';
                this.numIntentos[1] = this.numIntentos[1] + 1;
                this.setState({isCorreccionVisible: visible, isCheckVisible: false, isNextVisible: false});
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
            this.numIntentos[0] = this.numIntentos[0] + 1;
            this.setState({isCorreccionVisible: true, isNextVisible: nextNo});
        } else {
            this.numIntentos[1] = this.numIntentos[1] + 1;
            this.setState({isCorreccionVisible: true, isNextVisible: false});
        }
    }




    // pasar al siguiente ejercicio
    nextExercise = async() => {
        // if(this.state.ejercicioActual < this.state.ejerciciosLeccionActual.length - 1) {
        //     this.setState({isNextVisible: false, ejercicioActual: this.state.ejercicioActual + 1, isCorreccionVisible: false, enunciado: this.state.ejerciciosLeccionActual[this.state.ejercicioActual + 1].enunciado});
        // } else {
            // nos llevaria la página de resumen
            console.log('******************');
            const media = await calculateMedia(this.numIntentos);  
            this.props.route.params.update(true);
            this.props.navigation.navigate('Resumen', {progreso: media, leccion: this.props.route.params.tema})
        // }
    }


    // Completar la pantalla dependiendo del tipo de ejercicio que sea
    getEjercicio = () => {
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

 
    render() {
        if(this.state.isLoading){
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
                    <Header salir={this.modalExit} navigation={this.props.navigation} tema={this.props.route.params.tema}></Header>
                    
                    {/* Modal de salir del ejercicio*/
                    <ModalC lessonmodal={this.modalExit} visible={this.state.isExitVisible} tipo={'centro'}>
                        <ModalExit mevoy={this.salir} mequedo={this.modalExit}></ModalExit>
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
                        <MyText title={this.state.enunciado} style={{marginTop: 20, textAlign: 'left'}}></MyText>
                        <View>{this.getEjercicio()}</View>
                    </View>

                    <View style={[{position: 'absolute', bottom: 0, padding: 30, width:'100%'}]} >
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