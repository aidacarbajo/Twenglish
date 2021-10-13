import { ImageBackground, Pressable, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'
import MyText from '../Texts/MyText';
import Semana from './Semana';
import { getImage } from '../../util/ImageManager';
import { button, cards, icons, text } from '../../assets/theme/styles';
import MyTitle from '../Texts/MyTitle';
import BlueButton from '../Buttons/BlueButton';
import RoundButton from '../Buttons/RoundButton';
import { getDay } from '../../data/queries/rutina';

class Show extends Component {
    constructor(props) {
        super(props);

        this.tieneRutina = false;
        this.today = new Date().getDay();
        this.today -= 1;

        if(this.today === -1) {
            this.today = 6;
        }

        this.state = {
            dia: this.today,
            horas: []
        }
    }
  
    hideModal = () => {
        this.props.create();
    }

    editRoutine = () => {
        // console.log('i want to edit');
        this.props.create(); // este llama al editar de Routine.js
    }

    setUpdate = () => {
        this.props.setUpdate();
    }

    hasroutine = (has) => {
        this.tieneRutina = true;
        this.props.hasroutine(has);
    }

    removeHour = () => {
        console.log('Eliminar la hora del seleccionado')
    }

    loadDay = () => {
        return(
            this.state.horas.length > 0 ?
            (<View style={[cards.centrar, {width: '100%', marginTop: 30}]}>
                {
                    this.state.horas.map((item, index) => {
                        return(            
                            <View key={index} style={[cards.cards, cards.cardPares, cards.centrar, {width: 200, height: 80}]}>
                                {
                                    this.props.action === 'edit' && 
                                    <TouchableOpacity style={{width: 37, height: 37, position: 'absolute', right: -8, top: -10}} onPress={() => this.removeHour()}>
                                        <RoundButton icon="wrong" color="white"></RoundButton>
                                    </TouchableOpacity>
                                }
                                <MyText title={item.getHours() + ':' + (item.getMinutes()<10?'0':'') + item.getMinutes()} style={{lineHeight: 20, fontSize: 14}}></MyText>
                            </View>
                        )
                    })
                }

                {/* un + para crear nueva rutina */}
            </View>)
            :  this.norutina()
        )
    }

    norutina = () => {
        return(
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
        )
    }

    shouldComponentUpdate(props, state) {
        return true;
    }

    setSelected = (dia) => {
        this.setState({dia: dia});

        if(this.tieneRutina) {    
            getDay(dia).then(res => {
                this.setState({horas: res})
            });
        } 
    }

    back2show = () => {
        // volver a mostrar sin editar
        this.props.back2show();
    }

    render() {
        return(
            <View>
                <Semana selected={this.props.action} hasroutinee={this.hasroutine} update={this.props.needUpdate} setUpdate={this.setUpdate} dayS={this.setSelected} />

                <View style={{height: '100%'}}>
                {   // Cuando no hay ninguna rutina creada
                    this.props.action == 'show' && !this.tieneRutina && this.norutina()
                   
                }
                {   // cargar dia seleccionado
                    this.state.dia != undefined && this.loadDay()
                }
               
                </View>

                <View style={{position: 'absolute', bottom: 70, width: '115%', alignSelf: 'center', minHeight: 50}}>
                    {
                        !this.tieneRutina
                        ? <BlueButton title="Create routine" screen={this.hideModal} />
                        :   [
                            this.props.action == 'show' 
                            ? <BlueButton title="Edit routine" screen={this.editRoutine} />
                            : <View style={{flexDirection: 'row'}}>
                                
                                <TouchableOpacity style={[button.button, button.option, {alignItems: 'center', width: '45%'}]} onPress={() => this.back2show()}>
                                    <MyText title="Discard" style={text.primario}></MyText>
                                </TouchableOpacity>  

                                <BlueButton title="Save changes" screen={this.editRoutine} style={{width: '45%'}} />
                            </View>
                        ]
                    }
                </View>
            </View>
        )
    }
}

export default Show;