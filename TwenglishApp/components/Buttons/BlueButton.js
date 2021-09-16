import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { button, text } from '../../assets/theme/styles';
import MyTextWhite from '../Texts/MyTextWhite';
import LinearGradient from 'react-native-linear-gradient';

class BlueButton extends Component {
  constructor(props) {
      super(props);
  }
    
  render() {
    return (
        <LinearGradient locations={[0, 0.5, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.primary.backgroundColor} style={[button.button, this.props.style]}>
          <TouchableOpacity style={text.buttonText} onPress={this.props.screen}>
            <MyTextWhite title={this.props.title}></MyTextWhite>
          </TouchableOpacity>
        </LinearGradient>
    );
  }
}

export default BlueButton;