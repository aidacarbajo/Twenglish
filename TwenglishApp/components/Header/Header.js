import React, {Component} from 'react';
import { Pressable, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons, posiciones, secundary, view } from '../../assets/theme/styles';
import RoundButton from '../Buttons/RoundButton';
import Icon from '../Icons/Icon';
import MyTitle from '../Texts/MyTitle';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    sendData = () => {
        this.props.salir(true);
    }

    render() {
        return (
            <View style={[view.allContainers, {paddingBottom: 0, paddingRight: 0}]}>
                <View style={[posiciones.abolute, posiciones.topleft]}>
                    <TouchableOpacity onPress={this.sendData}>      
                        <Icon icon="back" color={secundary} style={icons.lg}></Icon>
                    </TouchableOpacity>
                </View>

                {
                    this.props.tema != undefined &&
                    <View style={[posiciones.abolute, {right: EStyleSheet.value('$20') + EStyleSheet.value('$5'), top: EStyleSheet.value('$20') + EStyleSheet.value('$5')}]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Apuntes', {tema: this.props.tema, portada: this.props.portada, from: 'Ejercicios'}) }>
                            <RoundButton icon="notes" color={'white'}></RoundButton>
                        </TouchableOpacity>
                    </View>
                }

                <MyTitle titleBold={this.props.tema != undefined ? this.props.tema : 'Test'} style={{marginLeft: -EStyleSheet.value('$5')}}></MyTitle>

            </View>
        );
    }
}

export default Header;
