import OptionButton  from "../Buttons/OptionButton";
import { OptionSelectedButton } from "../Buttons/OptionSelectedButton";
import { View } from 'react-native';
import { radiobutton } from "../../assets/theme/styles";
import React, { Component } from 'react'

class RadioButton extends Component {
  state = {
    value: null
  }

  callbackFunction = (opcionSeleccionada) => {
    this.setState({value: opcionSeleccionada})
    // console.log(opcionSeleccionada);
  }


  list = () => {
    const { value } = this.state;

    return this.props.opciones.map((element) => {
        if(value != null && value === element.title) {
            return (
                <OptionSelectedButton key={element.key} title={element.title} parentCallback = {this.callbackFunction}></OptionSelectedButton>
              );        
        } else {
            return (
              <OptionButton key={element.key} title={element.title} parentCallback = {this.callbackFunction}></OptionButton>
              ); 
        }
    });
  };


  // hacer functionamiento onPress para cambiar de Selected a noSelected


 render() {
    return (
      <View style={radiobutton.radiobutton}>
        {this.list()}
      </View>
    )
  }
}

export default RadioButton;