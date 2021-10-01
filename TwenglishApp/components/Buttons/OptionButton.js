import { button, text } from '../../assets/theme/styles';
import React, { Component } from 'react'
import {
  // TouchableOpacity,
  Pressable,
  Text,
  View,
} from 'react-native'

class OptionButton extends Component {
  sendData = () => {
    this.props.parentCallback(this.props.title);
  }

 render() {
    return (
      this.props.canPress 
      ? (
        <Pressable style={[button.button, button.option, {paddingLeft: 15}]} onPress={this.sendData}>
          <Text style={[text.primario, text.opcion]}>{this.props.title}</Text>
        </Pressable>  
      )
      : (
        <View style={[button.button, button.option, {paddingLeft: 15}]} onPress={this.sendData}>
          <Text style={[text.primario, text.opcion]}>{this.props.title}</Text>
        </View>  
      )
    )
  }
}

export default OptionButton;