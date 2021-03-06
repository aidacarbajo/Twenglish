import OptionButton  from "../Buttons/OptionButton";
import { OptionSelectedButton } from "../Buttons/OptionSelectedButton";
import { View } from 'react-native';
import { radiobutton } from "../../assets/theme/styles";
import React, { Component } from 'react'

class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opcionSeleccionada: null,
      opciones: this.props.opciones
    }
  }
  
  callbackFunction = (opcionSeleccionada) => {
    this.setState({opcionSeleccionada: opcionSeleccionada});

    if(this.state.opciones[0].titulo != undefined) {
      this.props.continuar(opcionSeleccionada);
    } else {
      const value = [...this.state.opciones].find(elem => elem.frase == opcionSeleccionada);
      this.props.check(value.esCorrecta);    
    }

  }
  
  static getDerivedStateFromProps(nextProps, state) {
    if(nextProps.opciones[0].frase != state.opciones[0].frase) {
      return {
          opciones: nextProps.opciones,
          opcionSeleccionada: null,
      }
    }
    return null;
}


  list = () => {
    let canPress = true;

    if(this.props.selected !== undefined) {
      canPress = false;
    }

    return this.state.opciones.map((element, index) => {
        if(this.state.opcionSeleccionada != null && this.state.opcionSeleccionada === element.frase || this.props.selected === index) {
            return (
                <OptionSelectedButton key={index} title={element.frase} titulo={element.titulo} parentCallback = {this.callbackFunction} canPress={canPress}></OptionSelectedButton>
            );        
        } else {
            return (
              <OptionButton key={index} title={element.frase} titulo={element.titulo} parentCallback = {this.callbackFunction} canPress={canPress}></OptionButton>
            ); 
        }
    });
  };

 render() {
    return (
      <View style={radiobutton.radiobutton}>
        {this.list()}
      </View>
    )
  }
}

export default RadioButton;