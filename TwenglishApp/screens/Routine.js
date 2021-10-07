import { View } from 'react-native';
import React, {Component} from 'react';
import { bodySub, view } from '../assets/theme/styles';
import MyTitle from '../components/Texts/MyTitle';
import MyText from '../components/Texts/MyText';

class Routine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[view.container, {paddingHorizontal: 50}]}>
                <MyTitle title="My" titleBold="Routine" style={{marginBottom: 10}}></MyTitle>
                <MyText title="Be constant with a routine" style={{color: bodySub}}/>
            </View>
        );    
    }

}

export default Routine;
