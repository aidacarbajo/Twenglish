import React, {Component} from 'react';
import { Pressable, View } from 'react-native';
import { posiciones, secundary, view } from '../../assets/theme/styles';
import { RoundButton } from '../Buttons/RoundButton';
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
                    {/* Falta el: ¿Seguro que quieres salir? */}
                    <Pressable onPress={this.sendData}>      
                        <Icon icon="back" color={secundary}></Icon>
                    </Pressable>
                </View>

                <View style={[posiciones.abolute, {right: 25, top: 25}]}>
                    <Pressable onPress={() => this.props.navigation.navigate('Apuntes', {tema: 'Greetings', portada: 'greetingsA1', from: 'Ejercicios'}) }>
                        <RoundButton icon="notes" color={'white'}></RoundButton>
                    </Pressable>
                </View>

                <MyTitle titleBold="Trip" style={{marginLeft: -7}}></MyTitle>

            </View>
        );
    }
}

export default Header;
