import { View } from 'react-native';
import React, {Component} from 'react';
import { bodySub, view } from '../assets/theme/styles';
import MyTitle from '../components/Texts/MyTitle';
import MyText from '../components/Texts/MyText';
import ModalC from '../components/Modal/ModalC';
import Show from '../components/Rutina/Show';
import Create from '../components/Rutina/Create';
import ModalNotificacion from '../components/Modal/ModalNotificacion';
import { emptyRoutine } from '../data/queries/rutina';

class Routine extends Component {
    constructor(props) {
        super(props);

        this.isRoutine = false;

        this.state = {
            isNewVisible: false,
            isMessageVisible: false,
            needUpdate: false,
            action: 'show'
        }

        // emptyRoutine();
    }


    hasroutine = (has) => {
        if(has){
            // Creado con exito
            this.setState({isMessageVisible: true});
            // ocultar modal de crear rutina
            this.changeModalVisible();
            // actualizar colores de la semana
            if(this.isRoutine != has) {
                this.setState({needUpdate: true});
            }
            this.isRoutine = has;

        } else {
            this.setState({isNewVisible: false});
        }
    }

    changeModalVisible = (visible, accion) => {
        if(!this.isRoutine && this.isRoutine!=undefined) {   // no tiene rutinas creadas
            if(!visible) {  // no tiene rutina? Se abre el modal
                this.setState({isNewVisible: true})
            } 
        } else {
            if(accion === 'create') {
                this.setState({isNewVisible: true});
            } else {        
                // Tiene rutina?
                this.setState({isNewVisible: false});

                if(accion === 'edit') {
                    this.setState({action: 'edit'})
                } 
            }
        }
    }

    hideMsg = () => {
        this.setState({isMessageVisible: false});
    }

    setUpdate = () => {
        this.setState({needUpdate: false});
    }

    back2show = (sinnada) => {
        this.isRoutine = sinnada;
        this.setState({action: 'show'});
    }

    render() {
        return (
            <View style={[view.container, {paddingHorizontal: 50}]}>
                <MyTitle title="My" titleBold="Routine" style={{marginBottom: 10}}></MyTitle>
                <MyText title="Be constant with a routine" style={{color: bodySub, marginBottom: 10}} />

                { (this.state.action != 'create') && <Show hasroutine={this.hasroutine} action={this.state.action} create={this.changeModalVisible} needUpdate={this.state.needUpdate} setUpdate={this.setUpdate} back2show={this.back2show} /> }                

                {/* Modal de crear nueva rutina */}
                <ModalC visible={this.state.isNewVisible}>
                    <Create action={'create'} hasroutine={this.hasroutine} mequedo={this.hasroutine}/>
                </ModalC>

                {/* Modal de creado correctamente */}
                <ModalC hide={this.hideMsg} visible={this.state.isMessageVisible} tiempoCount={1000} tipo={'abajo'} msg={2}>
                    <ModalNotificacion tipo={'resumen'} msg={'Created successfully'}></ModalNotificacion>
                </ModalC>
            </View>
        );    
    }

}

export default Routine;
