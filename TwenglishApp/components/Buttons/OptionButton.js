import { button, text } from '../../assets/theme/styles';
import React, { Component } from 'react'
import {
  // TouchableOpacity,
  Pressable,
  Text,
} from 'react-native'

class OptionButton extends Component {
  sendData = () => {
    this.props.parentCallback(this.props.title);
  }

 render() {
    return (
      <Pressable style={[button.button, button.option, {paddingLeft: 15}]} onPress={this.sendData}>
        <Text style={[text.primario, text.opcion]}>{this.props.title}</Text>
      </Pressable>  
    )
  }
}

export default OptionButton;