import React, {Component} from 'react';
import { StatusBar, View, ImageBackground } from 'react-native';
import { bold, cards, extrabold, view } from '../assets/theme/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import MyText from '../components/Texts/MyText';
import MyTitle from '../components/Texts/MyTitle';
import BlueButton from '../components/Buttons/BlueButton';
import { getImage } from '../util/ImageManager';

const Beginner = {
    titulo: 'Beginner',
    frase: 'Soy nuevo en el idioma o quiero empezar desde 0'
}

const WhatLevel = {
    titulo: 'Calculate my level',
    frase: 'Quiero saber qué nivel tengo'
}

class PreTest extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            continuar: false,
            quequiero: null
        }

        this.decision = this.decision.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    decision(beginner) {
        this.setState({continuar: true, quequiero: beginner.includes(0)});
    }  

    desde0 = () => {
        // Empezar desde 0
        if(this.state.quequiero) {
            this.props.navigation.navigate('Lecciones');
        } else {
            // Hacer test
            this.props.navigation.navigate('Test');
        }
    }

    render() {
        return(
            <View style={[view.container, {height: '100%'}]}>
                <StatusBar hidden />

                <View style={[view.safeArea]}>
                    <MyTitle title="Welcome to" titleBold="Twenglish"></MyTitle>

                    <View style={[{width: '70%', height: '40%', alignSelf: 'center', marginVertical: 20}]}>
                    <ImageBackground 
                        source={getImage('preTest')} 
                        resizeMode="cover" 
                        style={[cards.image]} 
                        imageStyle={{ borderRadius: 12}}
                    />
                    </View>

                    <MyText title="What's your level currently?" style={{marginTop: 15}} />
                    <RadioButton opciones={[Beginner, WhatLevel]} continuar={this.decision} />
                </View>
                
                <BlueButton title="Continue" screen={this.desde0} style={[!this.state.continuar && {display: 'none'}, {width: '85%'}]} />

            </View>
        );
    }
}
 
export default PreTest;