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

class Ejercicios extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: true,
            isExitVisible: false,
            isCorreccionVisible: true,
            ejercicioActual: 0,
            ejerciciosLeccionActual: null,
            enunciado: null
        };
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
    deleteCorreccion = () => {
        this.setState({isCorreccionVisible: false});
    }
 

        
    // Completar la pantalla dependiendo del tipo de ejercicio que sea
    getEjercicio = () => {
        const ejercicio = this.state.ejerciciosLeccionActual[this.state.ejercicioActual];
        let res = null;

        switch(ejercicio.tipo) {
            case 1:
                // check={this.checkAnswer}
                res = <Voc_Ex1 ejercicio={ejercicio.bloqueString}/>
                break;
            case 2:
                console.log('Soy tipo 2');
                break;
            case 3:
                console.log('Soy tipo 3');
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
                    <ModalC  hide={this.deleteCorreccion} visible={this.state.isCorreccionVisible} tipo={'abajo'} tiempoCount={true}>
                        <ModalNotificacion tipo={"fallo"}></ModalNotificacion>
                    </ModalC>
                    }
                    
                    {//////////////////////////
                    /* Contenido importante ///
                    /////////////////////////*/}
                    <View style={[view.safeArea, {width: '100%', height: '85%'}]}>
                        {/* Enunciado del ejercicio */}
                        <MyText title={this.state.enunciado + '.'} style={{marginTop: 20}}></MyText>
                        <View>{this.getEjercicio()}</View>
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