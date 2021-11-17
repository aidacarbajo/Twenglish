import React, {Component} from 'react';
import { StatusBar, View } from 'react-native';
import { bold, extrabold, view } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';
import BlueButton from '../components/Buttons/BlueButton';

class Test extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        // }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <View style={[view.container, {height: '100%'}]}>
                <StatusBar hidden />

                <View style={[view.safeArea]}>
                    <MyTitle titleBold="Test"></MyTitle>

                    {/* Ejercicios del Test */}
                </View>
            </View>
        );
    }
}
 
export default Test;