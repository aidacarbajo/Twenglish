import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { secundary, text } from '../../assets/theme/styles';

class MyTitle extends Component {
    constructor(props) {
        super(props);
    }

    applyBoldStyle = () => {
        let numberOfItemsAdded = 0;
        let result = this.props.title.split(/\{\d+\}/);    
        this.props.destacar.forEach((boldText, i) => result.splice(++numberOfItemsAdded + i, 0, <Text style={[text.body, { color: secundary, fontSize:12, fontStyle: 'italic', color: '#EE8300'}]} key={i}>{boldText}</Text>));
        
        return <Text style={[text.primario, text.primarioTitulo, text.rightt, this.props.style, { marginBottom: 0}]}>{result}</Text>;
    };

    render() {
        return (
            <View>
                {
                    this.props.destacar == undefined 
                    ?   <View style={{flexDirection:'row'}}>
                            <Text style={[text.primario, text.primarioTitulo, text.rightt, this.props.style]}>{this.props.title}</Text> 
                            <Text style={[text.primario, text.primarioTitulo, text.primarioBold, this.props.style]}>{this.props.titleBold}</Text>        
                        </View>
                    : (
                        <View style={{flexDirection:'row'}}>
                            {this.applyBoldStyle()}
                        </View>
                    )
                }
            </View>
        );
    }
}

export default MyTitle;
