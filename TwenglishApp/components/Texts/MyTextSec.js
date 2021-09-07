import React, { Component } from 'react';
import { Text } from 'react-native';
import { text } from '../../assets/theme/styles';

class MyTextSec extends Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        return (
            <Text style={[text.body, text.secundario]}>{this.props.title}</Text> 
        );
    }
}

export default MyTextSec;