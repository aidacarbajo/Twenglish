import React, { Component } from 'react';
import { icons } from '../../assets/theme/styles';
import * as myIcons from './IconsList';
import { Text } from 'react-native';
import { decode } from 'html-entities';


class Icon extends Component {
  constructor(props) {
      super(props);
  }
    
  render() {
    return (
        <Text style={icons.all}>{decode(myIcons.getIcon(this.props.icon))}</Text>
    );
  }
}

export default Icon;
