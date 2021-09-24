import React, {Component} from 'react';
import { ActivityIndicator, View } from 'react-native';
import Header from '../components/Header/Header';
import { view } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import BlueButton from '../components/Buttons/BlueButton';
import Voc_Ex1 from './Voc_Ex1';
import ModalExit from '../components/Modal/ModalExit';
import ModalC from '../components/Modal/ModalC';
import ModalNotificacion from '../components/Modal/ModalNotificacion';
import { updateCurrentLesson } from '../data/queries/lecciones';
import Voc_Ex2 from './Voc_Ex2';
import Voc_Ex3 from './Voc_Ex3';

class Ejercicios extends Component {

    constructor(props) {
        super(props);
        
        this.acierto = '';

        this.state = {
            isLoading: true,
            isExitVisible: false,
            isCheckVisible: false,
            isCorreccionVisible: false,
            isNextVisible: false,
            ejercicioActual: 0,
            ejerciciosLeccionActual: null,
            enunciado: null
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

    salir = () => {
        this.setState({isExitVisible: false});
        this.props.navigation.navigate('Lessons');
    }

    // Modal de notificacion
    deleteCorreccion = (visible, correcta) => {
        // console.log('Visible: ', visible, '---- Correcta: ', correcta);
        console.log(correcta);
        if(correcta != undefined) {
            if(correcta) {
                this.acierto = 'acierto';
                this.setState({isCorreccionVisible: visible, isCheckVisible: false, isNextVisible: true});
            } else {
                this.acierto = 'fallo';
                this.setState({isCorreccionVisible: visible, isCheckVisible: false, isNextVisible: false});
            }
        } else {
            this.setState({isCorreccionVisible: visible, isCheckVisible: false});
        }
    }
 
    ////////////////////////////////////////////////////////////////////////
    // cuando corrijo el ejercicio llama a la funcion dos putas veces, socorro
    ///////////////////////////////////////////////////////////////
    
    // corregir el ejercicio 
    showButton = (visible) => {
        if(!this.state.isCorreccionVisible) {
            this.setState({isCheckVisible: visible});
        }
    }

    correctExercise = () => {
        const res = this.child.checkAnswer();
        this.deleteCorreccion(true, res);
    }

    mal = (escorrecta) => {
        this.acierto = escorrecta;
        if(this.acierto) {
            this.setState({isCorreccionVisible: true, isNextVisible: true});
        } else {
            this.setState({isCorreccionVisible: true});
        }
    }




    // pasar al siguiente ejercicio
    nextExercise = () => {
        if(this.state.ejercicioActual < this.state.ejerciciosLeccionActual.length - 1) {
            this.setState({isNextVisible: false, ejercicioActual: this.state.ejercicioActual + 1, isCorreccionVisible: false, enunciado: this.state.ejerciciosLeccionActual[this.state.ejercicioActual + 1].enunciado});
        } else {
            console.log('No quedan ejercicios');
            // nos llevaria la página de resumen
        }
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
                res = <Voc_Ex2 imagen={ejercicio.bloqueString.imagenes} radioB={ejercicio.bloqueRadioButton} buttonCheck={this.showButton} onRef={ref => {this.child = ref}} />
                break;
            case 3:
                res = <Voc_Ex3 everyPar={ejercicio.bloquePares} buttonCheck={this.mal} onRef={ref => {this.child = ref}} />
                break;
            case 4:
                console.log('Soy tipo 4');
                break;
            case 5:
                console.log('Soy tipo 5');
                break;
            case 6:
                console.log('Soy tipo 6');
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
                        <MyText title={this.state.enunciado} style={{marginTop: 20}}></MyText>
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