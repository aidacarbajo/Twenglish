import OptionButton  from "../Buttons/OptionButton";
import { OptionSelectedButton } from "../Buttons/OptionSelectedButton";
import { View } from 'react-native';
import { radiobutton } from "../../assets/theme/styles";
import React, { Component } from 'react'

class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.opcionSeleccionada = null;
    this.opciones = this.props.opciones;

    this.state = {
      valores: null
    }
  }
  
  callbackFunction = (opcionSeleccionada) => {
    this.opcionSeleccionada = opcionSeleccionada;
    const value = [...this.opciones].find(elem => elem.frase == opcionSeleccionada);
    // console.log(value);

    // if(value.esCorrecta) {
      this.props.check(value.esCorrecta);
    // }
  }

  list = () => {
    return this.opciones.map((element, index) => {
        if(this.opcionSeleccionada != null && this.opcionSeleccionada === element.frase) {
            return (
                <OptionSelectedButton key={index} title={element.frase} parentCallback = {this.callbackFunction}></OptionSelectedButton>
            );        
        } else {
            return (
              <OptionButton key={index} title={element.frase} parentCallback = {this.callbackFunction}></OptionButton>
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