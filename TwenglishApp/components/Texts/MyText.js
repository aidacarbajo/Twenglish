import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { text } from '../../assets/theme/styles';

class MyText extends Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text style={[text.body, this.props.style, {textAlign: 'left'}]}>{this.props.title}</Text> 
            </View>
        );
    }
}

export default MyText;