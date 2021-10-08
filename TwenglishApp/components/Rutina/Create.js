import { Pressable, View } from 'react-native';
import React, { Component } from 'react'
import Semana from './Semana';
import BlueButton from '../Buttons/BlueButton';
import MyText from '../Texts/MyText';
import { button, text } from '../../assets/theme/styles';

class Create extends Component {
    constructor(props) {
        super(props);

        this.child;

        this.state = {
            add: false,
            daysSelected: []
        }
    }
  
    createRoutine = () => {
        this.setState({add: true});
    }

    // Aqui hay que hacer la llamada a la bbdd
    routine = (r) => {
        console.log(r);
        if([...r].includes(true)) {
            console.log('hay seleccionados');
            this.setState({daysSelected: r, add: false});
        } else {
            console.log('no hay seleccionados');
            // insertar mensaje de que debe seleccionar algun valor
        }
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