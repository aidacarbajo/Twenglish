import React from 'react';
import { Text } from 'react-native';
import { cards } from '../../assets/theme/styles';

export default ( { dataTitle, data100 } ) => {
    return (
        <Text style={cards.tag}>{dataTitle}
            {data100 != undefined 
            ? <Text style={cards.tag100}>  {data100}%</Text>
            : <Text style={cards.tag100}></Text>
            }
        </Text>    
    );
}