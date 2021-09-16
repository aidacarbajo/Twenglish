import React, {Component} from 'react';
import { view } from '../assets/theme/styles';
import { ActivityIndicator, View } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { RoundButton } from '../components/Buttons/RoundButton';

class Voc_Ex1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };
    
    }

    getEjercicio = () => {
    
    }

 
    render() {
        if(this.state.isLoading){
        return (
            <View>
                <ActivityIndicator/>
            </View>
        )
        } else {
        return (
            <View style={view.allContainers}>
                <MyTitle titleBold="Trip"></MyTitle>

                <RoundButton icon="notes" color={'white'}></RoundButton>
            </View>

        );
        }
    }
}

export default Voc_Ex1;