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

    // sendData = () => {
    //     this.props.lessonsModal(this.props.dataTitle, this.props.dataImagen);
    // }

    render() {
        return (
            <View style={[view.allContainers, {paddingBottom: 0, paddingRight: 0}]}>
                <View style={[posiciones.abolute, posiciones.topleft]}>
                    {/* Falta el: ¿Seguro que quieres salir? */}
                    <Pressable onPress={() => this.props.navigation.navigate('Lessons')}>      
                        <Icon icon="back" color={secundary}></Icon>
                    </Pressable>
                </View>

                <View style={[posiciones.abolute, {right: 30, top: 30}]}>
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
