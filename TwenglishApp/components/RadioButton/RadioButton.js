import OptionButton  from "../Buttons/OptionButton";
import { OptionSelectedButton } from "../Buttons/OptionSelectedButton";
import { View } from 'react-native';
import { radiobutton } from "../../assets/theme/styles";
import React, { Component, GetDerivedStateFromProps } from 'react'

class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.opcionSeleccionada = null;
    this.opciones = this.props.opciones;

    this.state = {
      valores: null,
    }
  }
  
  callbackFunction = (opcionSeleccionada) => {
    this.opcionSeleccionada = opcionSeleccionada;
    const value = [...this.opciones].find(elem => elem.frase == opcionSeleccionada);
    this.props.check(value.esCorrecta);
  }

  shouldComponentUpdate(props, state) {
    return true;
  }

  componentDidUpdate(props) {
    // console.log('update', props);
  }

  list = () => {
    let canPress = true;
    if(this.props.selected !== undefined) {
      canPress = false;
    }

    return this.opciones.map((element, index) => {
        if(this.opcionSeleccionada != null && this.opcionSeleccionada === element.frase || this.props.selected === index) {
            return (
                <OptionSelectedButton key={index} title={element.frase} parentCallback = {this.callbackFunction} canPress={canPress}></OptionSelectedButton>
            );        
        } else {
            return (
              <OptionButton key={index} title={element.frase} parentCallback = {this.callbackFunction} canPress={canPress}></OptionButton>
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