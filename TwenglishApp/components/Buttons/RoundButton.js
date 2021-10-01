import React, {Component} from 'react';
import { button } from '../../assets/theme/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../Icons/Icon';
import { View } from 'react-native';

class RoundButton extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      this.props.style === undefined 
      ? (
        <LinearGradient locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.round]}>
          <Icon icon={this.props.icon} color={this.props.color}></Icon>
        </LinearGradient>
      )
      : [
        this.props.style
        ? (<View key={'listen'} style={[button.round, button.buttonListen, {width: 60, height: 60}]}>
            <Icon icon={this.props.icon} color={this.props.color}></Icon>
          </View>)
        : (<View key={'stoplisten'} style={[button.round, button.buttonNoListen, {width: 60, height: 60}]}>
            <Icon icon={this.props.icon} color={this.props.color}></Icon>
          </View>)
      ]  
    )
  }
}

export default RoundButton;