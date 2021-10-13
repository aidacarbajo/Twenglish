import { Pressable, View } from 'react-native';
import React, { Component, useState } from 'react'
import Semana from './Semana';
import BlueButton from '../Buttons/BlueButton';
import MyText from '../Texts/MyText';
import { body, button, extra, text } from '../../assets/theme/styles';
import DatePicker from 'react-native-date-picker'
import { createRoutine } from '../../data/queries/rutina';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            add: false,
            date: new Date(),
        }
    }

    setDate = (date) => {
        // this.date = date;
        // console.log(date);
    }
  
    createRoutine = () => {
        this.setState({add: true});
    }

    routine = (r) => {
        if([...r].includes(true)) {
            // Aqui hay que hacer la llamada a la bbdd
            createRoutine([...r], this.state.date);
            this.setState({add: false});
            this.props.hasroutine(r);
        } else {
            // insertar mensaje de que debe seleccionar algun valor
        }
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
                        is24hourSource = 'locale'
                        locale = 'es-ES'
                        // minuteInterval = {5}
                        textColor = {body}
                        date={this.state.date} 
                        onDateChange={date => this.setState({ date })}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Pressable style={[button.button, button.option, {width: '47%', alignItems: 'center'}]} onPress={this.props.mequedo}>
                        <MyText title="Cancel" style={[text.primario, {lineHeight: 21}]} />
                    </Pressable>  
                    <BlueButton title="Add" screen={this.createRoutine} style={{width: '47%'}} />
                </View>

            </View>
        )
    }
}

export default Create;