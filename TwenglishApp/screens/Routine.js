import { View } from 'react-native';
import React, {Component} from 'react';
import { bodySub, view } from '../assets/theme/styles';
import MyTitle from '../components/Texts/MyTitle';
import MyText from '../components/Texts/MyText';
import ModalC from '../components/Modal/ModalC';
import Show from '../components/Rutina/Show';
import Edit from '../components/Rutina/Edit';
import Create from '../components/Rutina/Create';

class Routine extends Component {
    constructor(props) {
        super(props);

        this.action = 'show';
        this.isRoutine = false;

        this.state = {
            isNewVisible: false,
            isEditVisible: false
        }
    }


    hasroutine = (has) => {
        this.isRoutine = has;
    }

    editRoutine = () => {
        console.log('I want to edit');
    }

    changeModalVisible = () => {
        if(!this.isRoutine) {   // no tiene rutinas creadas
            console.log('preparing create routine');
            this.setState({isNewVisible: !this.state.isNewVisible})
        } else {
            this.setState({isEditVisible: !this.state.isEditVisible})   
        }
    }

    render() {
        return (
            <View style={[view.container, {paddingHorizontal: 50}]}>
                <MyTitle title="My" titleBold="Routine" style={{marginBottom: 10}}></MyTitle>
                <MyText title="Be constant with a routine" style={{color: bodySub, marginBottom: 10}} />

                { this.action == 'show' && <Show hasroutine={this.hasroutine} action={this.action} create={this.changeModalVisible} /> }
                { this.action == 'edit' && <Edit hasroutine={this.hasroutine} action={this.action} /> }
                

                <ModalC visible={this.state.isNewVisible}>
                    <Create action={'create'} mequedo={this.changeModalVisible} />
                </ModalC>
            </View>
        );    
    }

}

export default Routine;
