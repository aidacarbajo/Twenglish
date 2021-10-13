import { ImageBackground, View } from 'react-native';
import React, { Component } from 'react'
import MyText from '../Texts/MyText';
import Semana from './Semana';
import { getImage } from '../../util/ImageManager';
import { cards } from '../../assets/theme/styles';
import MyTitle from '../Texts/MyTitle';
import BlueButton from '../Buttons/BlueButton';
import { getDay } from '../../data/queries/rutina';

class Show extends Component {
    constructor(props) {
        super(props);

        this.tieneRutina = false;
    
        this.state = {
            dia: undefined,
            horas: []
        }

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
            <View>
                
                <MyText title="Loading day..."></MyText>

            </View>
        )
    }

    shouldComponentUpdate(props, state) {
        return true;
    }

    setSelected = (dia) => {
        this.setState({dia: dia});

        if(this.tieneRutina) {    
            getDay(dia).then(res => {
                console.log(res);
                
            });
        } 
    }

    render() {
        return(
            <View>
                <Semana selected={this.props.action} hasroutinee={this.hasroutine} update={this.props.needUpdate} setUpdate={this.setUpdate} dayS={this.setSelected} />

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
                    this.state.dia != undefined && this.tieneRutina && this.loadDay()
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