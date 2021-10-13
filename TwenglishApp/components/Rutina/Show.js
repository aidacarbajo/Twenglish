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

        this.tieneRutina = false;
    }
  
    hideModal = () => {
        this.props.create();
    }

    setUpdate = () => {
        this.props.setUpdate();
    }

    hasroutine = (has) => {
        this.tieneRutina = true;
        this.props.hasroutine(has);
    }

    loadDay = () => {
        return(
            <MyText title="Loading day..."></MyText>
        )
    }

    render() {
        return(
            <View>
                <Semana selected={this.props.action} hasroutinee={this.hasroutine} update={this.props.needUpdate} setUpdate={this.setUpdate} />

                <View style={{height: '100%'}}>
                {
                    this.props.action == 'show' && !this.tieneRutina &&
                    <View>
                        <View style={[{width: '80%', height: '65%', alignSelf: 'center'}]}>
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

                    </View>
                }
                {
                    this.tieneRutina && this.props.action == 'show' && this.loadDay()
                }
                </View>

                <View style={{position: 'absolute', bottom: 70, width: '115%', alignSelf: 'center', minHeight: 50}}>
                    {
                        !this.tieneRutina
                        ? <BlueButton title="Create routine" screen={this.hideModal} />
                        : <BlueButton title="Edit routine" screen={this.hideModal} />
                    }
                </View>
            </View>
        )
    }
}

export default Show;