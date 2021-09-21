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
import { getEjerciciosLeccion } from '../data/queries/ejercicios';

class Ejercicios extends Component {

    constructor(props) {
        super(props);
        
        // Cuando apriete a una imagen que se guarde esa palabra en la posicion del indice apretado
        // Cuando le de a check comprueba estos resultados con los suyos
        const respuestasUsuario = ['', '', '', ''];

        this.state = {
            isLoading: false,
            isExitVisible: false,
            isCorreccionVisible: true,
            ejercicioActual: 0,
            ejerciciosLeccionActual: null
            // pressed: [false, false, false, false],
        };

    
    }

    componentDidMount () {
        const lessonId = this.props.route.params.portada;
        updateCurrentLesson(lessonId).then(res => {
            console.log(res);
        });

        // getEjerciciosLeccion();
    }

    getEjercicio = () => {
    
    }

    // Modal ¿Estas seguro de que quieres salir?
    modalExit = (visible) => {
        console.log(this.state.ejercicioActual);

        this.setState({isExitVisible: visible});
    }

    salir = () => {
        this.setState({isExitVisible: false});
        this.props.navigation.navigate('Lessons');
    }

    // Modal de notificacion
    deleteCorreccion = () => {
        this.setState({isCorreccionVisible: false});
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
                    <Header salir={this.modalExit} navigation={this.props.navigation}></Header>
                    
                    {/* Modal de salir del ejercicio*/
                    <ModalC lessonmodal={this.modalExit} visible={this.state.isExitVisible} tipo={'centro'}>
                        <ModalExit mevoy={this.salir} mequedo={this.modalExit}></ModalExit>
                    </ModalC>
                    }

                    {/* Modal de acierto/fallo/infoextra*/
                    <ModalC  hide={this.deleteCorreccion} visible={this.state.isCorreccionVisible} tipo={'abajo'} tiempoCount={true}>
                        <ModalNotificacion tipo={"fallo"}></ModalNotificacion>
                    </ModalC>
                    }
                    
                    {//////////////////////////
                    /* Contenido importante ///
                    /////////////////////////*/}
                    <View style={[view.safeArea, {width: '100%', height: '85%'}]}>
                        {/* Enunciado del ejercicio */}
                        <MyText title="Choose the correct image." style={{marginTop: 20}}></MyText>

                        {/* Tipo de pregunta del ejercicio*/}
                        {/* getEjercicio(), que tenga un switch que llame a las preguntas y a las respuestas dependiendo el tipo de ejercicio? */}
                        <Voc_Ex1></Voc_Ex1>

                        
                    </View>

                    {/* Boton para comprobar el resultado */}
                    <View style={[{position: 'absolute', bottom: 0, padding: 30, width:'100%'}]}>
                        <BlueButton title="Check answer"></BlueButton>
                    </View>

                    
                </View>
            );
        }
    }
}

export default Ejercicios;