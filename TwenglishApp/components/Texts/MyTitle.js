import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { text } from '../../assets/theme/styles';

class MyTitle extends Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text style={[text.primario, text.primarioTitulo, text.rightt]}>{this.props.title}</Text> 
                <Text style={[text.primario, text.primarioTitulo, text.primarioBold]}>{this.props.titleBold}</Text>
            </View>
        );
    }
}

export default MyTitle;
