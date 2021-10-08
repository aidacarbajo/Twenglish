import { View } from 'react-native';
import React, { Component } from 'react'
import Semana from './Semana';
import BlueButton from '../Buttons/BlueButton';

class Edit extends Component {
    constructor(props) {
        super(props);
    }
  
    editRoutine = () => {
        console.log('I want to edit');
    }

    render() {
        return(
            <View style={{height: '100%'}}>
                <Semana selected={this.props.action} />

                {/* La info del dia seleccionado */}
                <></>   
                <View style={{position: 'absolute', bottom: 30, width: '115%', alignSelf: 'center', minHeight: 50}}>
                    <BlueButton title="Create routine" screen={this.editRoutine} />
                </View>

            </View>
        )
    }
}

export default Edit;