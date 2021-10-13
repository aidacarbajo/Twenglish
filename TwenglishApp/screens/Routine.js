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

        this.action = 'show';
        this.isRoutine = false;

        this.state = {
            isNewVisible: false,
            isEditVisible: false,
            isMessageVisible: false,
            needUpdate: false
        }

        emptyRoutine();
    }


    hasroutine = (has) => {
        if(has){
            // Creado con exito
            this.setState({isMessageVisible: true});
            // ocultar modal de crear rutina
            this.changeModalVisible(false);
            // actualizar colores de la semana
            if(this.isRoutine != has) {
                this.setState({needUpdate: true});
                // Cargar info del dia seleccionado
            }
        }
        this.isRoutine = has;
    }

    editRoutine = () => {
        this.action = 'edit';
    }

    changeModalVisible = (visible) => {
        if(!this.isRoutine || visible != undefined) {   // no tiene rutinas creadas
            if(visible != undefined) {
                this.setState({isNewVisible: visible})
            } else {
                this.setState({isNewVisible: !this.state.isNewVisible});
            }
        } else {
            this.setState({isEditVisible: !this.state.isEditVisible})   
        }
    }

    hideMsg = (visible) => {
        this.setState({isMessageVisible: visible});
    }

    setUpdate = () => {
        this.setState({needUpdate: false});
    }

    render() {
        return (
            <View style={[view.container, {paddingHorizontal: 50}]}>
                <MyTitle title="My" titleBold="Routine" style={{marginBottom: 10}}></MyTitle>
                <MyText title="Be constant with a routine" style={{color: bodySub, marginBottom: 10}} />

                { (this.action == 'show' || this.action == 'edit') && <Show hasroutine={this.hasroutine} action={this.action} create={this.changeModalVisible} needUpdate={this.state.needUpdate} setUpdate={this.setUpdate} /> }                

                {/* Modal de crear nueva rutina */}
                <ModalC visible={this.state.isNewVisible}>
                    <Create action={'create'} hasroutine={this.hasroutine} />
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
