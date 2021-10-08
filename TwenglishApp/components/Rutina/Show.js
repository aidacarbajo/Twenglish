import { ImageBackground, Pressable, View } from 'react-native';
import React, { Component } from 'react'
import { getWeek } from '../../data/queries/rutina';
import MyText from '../Texts/MyText';
import Semana from './Semana';
import { getImage } from '../../util/ImageManager';
import { cards } from '../../assets/theme/styles';
import MyTitle from '../Texts/MyTitle';
import BlueButton from '../Buttons/BlueButton';

class Show extends Component {
    constructor(props) {
        super(props);
    }
  
    createRoutine = () => {
        this.props.create();
    }

    hasroutine = (has) => {
        console.log(has);
        this.props.hasroutine(has);
    }

    render() {
        return(
            <View style={{height: '100%'}}>
                <Semana selected={this.props.action} hasroutinee={this.hasroutine} />

                <View style={[{width: '80%', height: '50%', alignSelf: 'center'}]}>
                    <ImageBackground
                        source={getImage('routine')} 
                        resizeMode="cover" 
                        style={cards.image} 
                    />
                </View>

                <View style={{width: '100%', alignItems: 'center'}}>
                    <MyTitle titleBold="It's pretty quite in here," style={{fontSize: 16, textAlign: 'center', marginBottom: 0}} />
                    <MyTitle titleBold="don't you think?" style={{fontSize: 16, textAlign: 'center', marginBottom: 10}} />
                    <MyText title="Create a routine to learn faster" style={{fontSize: 10}} />
                </View>

                <View style={{position: 'absolute', bottom: 30, width: '115%', alignSelf: 'center', minHeight: 50}}>
                    <BlueButton title="Create routine" screen={this.createRoutine} />
                </View>

            </View>
        )
    }
}

export default Show;