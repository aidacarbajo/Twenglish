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
      this.props.progress !== undefined
      ? (
        <LinearGradient key={Math.random()*100} locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.round, {width: 200, height: 200, borderRadius: 250}]}>
          {this.props.children}
        </LinearGradient>
      )
      : [
        this.props.style === undefined 
        ? (
          <LinearGradient  key={Math.random()*100} locations={[0, 1]} useAngle={true} angle={-45} angleCenter={{ x: 0.5, y: 0.5 }} colors={button.secundary.backgroundColor} style={[button.round, {width: this.props.size != undefined ? this.props.size : 44, height: this.props.size != undefined ? this.props.size : 44}]}>
            <Icon icon={this.props.icon} color={this.props.color}></Icon>
          </LinearGradient>
        )
        : [
          this.props.style
          ? (<View key={Math.random()*100} style={[button.round, button.buttonListen, {width: this.props.size, height: this.props.size}]}>
              <Icon icon={this.props.icon} color={this.props.color}></Icon>
            </View>)
          : (<View  key={Math.random()*100} style={[button.round, button.buttonNoListen, {width: this.props.size, height: this.props.size}]}>
              <Icon icon={this.props.icon} color={this.props.color}></Icon>
            </View>)
        ]  
      ] 
    )
  }
}

export default RoundButton;