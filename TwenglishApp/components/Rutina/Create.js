import { TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'
import Semana from './Semana';
import BlueButton from '../Buttons/BlueButton';
import MyText from '../Texts/MyText';
import { body, button, text } from '../../assets/theme/styles';
import DatePicker from 'react-native-date-picker'
import { createRoutine } from '../../data/queries/rutina';
import { createScheduleNotification } from '../../util/NotificationManager';

class Create extends Component {
    constructor(props) {
        super(props);

        this.nuevo = true;

        this.state = {
            add: false,
            date: new Date()
        }
    }

    createRoutine = () => {
        this.setState({add: true});
    }

    routine = (r) => {
        if([...r].includes(true)) {
            // Aqui hay que hacer la llamada a la bbdd
            createRoutine([...r], this.state.date );
            createScheduleNotification();
            this.setState({add: false});
            this.nuevo = true;
            this.props.hasroutine(r, 'create');
        } else {
            // insertar mensaje de que debe seleccionar algun valor
        }
    }

    setNuevo = () => {
        this.nuevo = false;    
    }

    setUpdate = () => {
        this.update = false;
    }


    render() {
        return(
            <View style={{padding: 10}}>
                <View style={{marginBottom: 15}}>
                    <MyText title="Days" />
                    <Semana selected={this.props.action} hasRoutinee={this.routine} pressed={this.state.add} />
                </View>

                <View style={{marginBottom: 15}}>
                    <MyText title="Time" />
                    <DatePicker
                        mode = "time"
                        androidVariant = 'iosClone'
                        is24hourSource = 'device'
                        // locale = 'es-ES'
                        textColor = {body}
                        date={this.state.date} 
                        onDateChange={date => this.setState({ date })}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={[button.button, button.option, {width: '47%', alignItems: 'center'}]} onPress={() => this.props.mequedo()}>
                        <MyText title="Cancel" style={[text.primario, {lineHeight: 21}]} />
                    </TouchableOpacity>  
                    <BlueButton title="Add" screen={this.createRoutine} style={{width: '47%'}} />
                </View>

            </View>
        )
    }
}

export default Create;