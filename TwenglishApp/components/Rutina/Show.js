import { ImageBackground, Pressable, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'
import MyText from '../Texts/MyText';
import Semana from './Semana';
import { getImage } from '../../util/ImageManager';
import { button, cards, icons, primary, text } from '../../assets/theme/styles';
import MyTitle from '../Texts/MyTitle';
import BlueButton from '../Buttons/BlueButton';
import RoundButton from '../Buttons/RoundButton';
import { deleteAnHour, getDay } from '../../data/queries/rutina';

class Show extends Component {
    constructor(props) {
        super(props);

        this.action = 'show';

        this.tieneRutina = false;
        this.today = new Date().getDay();
        this.today -= 1;

        if(this.today === -1) {
            this.today = 6;
        }

        // Añado y elimino este array (es provisional hasta que se de a Save changes)
        this.firstTime = [true, true, true, true, true, true, true];

        this.state = {
            dia: this.today,
            horas: [],
            copy: [{horas: []}, {horas: []}, {horas: []}, {horas: []}, {horas: []}, {horas: []}, {horas: []}]
        }
    }
  
    hideModal = () => {
        this.props.create(false, 'show');   // false porque no tiene rutina
    }

    editRoutine = () => {
        // console.log('i want to edit');
        this.props.create(false, 'edit');    // true porque tiene rutina
    }

    // Vuelve a estar a falso la necesidad de actualizar
    setUpdate = () => {
        this.props.setUpdate();
    }

    hasroutine = (has) => {
        this.tieneRutina = true;
        this.props.hasroutine(has);
    }

    removeHour = (index) => {
        // Aqui cuando le de a saveChanges se realiza la accion
        // deleteAnHour(this.state.dia, index).then(res=> {
        //     this.setState({horas: res[0].Horas})
        // })
        var array = [...this.state.copy];
            array[this.state.dia].horas.splice(index, 1);
            
            this.setState({copy: array});

        // const copia = this.state.copy[this.state.dia];
        // console.log(copia.horas);
        // this.setState({copy: this.state.copy[this.state.dia].horas.splice(index, 1)});
        // this.setState({horas: this.copy})
    }

    newRoutine = () => {
        console.log('Crear nueva rutina');
    }

    


    loadDay = () => {
        return(
            // this.state.horas.length > 0 ?
            (<View style={[cards.centrar, {width: '100%', marginTop: 30}]}>
                {
                    // Si no está editando recorre el array de this.state.horas (que es la de la bbdd)
                    this.props.action === 'show' && 
                    this.state.horas.map((item, index) => {
                            return(            
                                <View key={index} style={[cards.cards, cards.cardPares, cards.centrar, {width: 200, height: 80,  marginBottom: 12}]}>
                                    <MyText title={item.getHours() + ':' + (item.getMinutes()<10?'0':'') + item.getMinutes()} style={{lineHeight: 20, fontSize: 14}}></MyText>
                                </View>
                            )    
                    })
                }
                { 
                    // Si está editando coge el de copy
                    this.props.action === 'edit' &&
                    this.state.copy[this.state.dia].horas.map((item, index) => {
                        return(            
                            <View key={index} style={[cards.cards, cards.cardPares, cards.centrar, {width: 200, height: 80,  marginBottom: 12}]}>
                                {
                                    this.props.action === 'edit' &&
                                    <TouchableOpacity style={{position: 'absolute', right: -8, top: -10}} onPress={() => this.removeHour(index)}>
                                        <RoundButton icon="wrong" color="white" size={32}></RoundButton>
                                    </TouchableOpacity>
                                }
                                <MyText title={item.getHours() + ':' + (item.getMinutes()<10?'0':'') + item.getMinutes()} style={{lineHeight: 20, fontSize: 14}}></MyText>
                            </View>
                        )    
                    })
                }

                {/* un + para crear nueva rutina */
                this.props.action === 'edit' && 
                <TouchableOpacity onPress={() => this.newRoutine()} style={{marginVertical: 20}}>
                    <RoundButton icon="+" color={primary} size={37} style={false}></RoundButton>
                </TouchableOpacity>
                }
            </View>)
            // :  this.norutina()

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
                // array provisional
                if(this.firstTime[dia]) {
                    let p = this.state.copy;
                    p[dia].horas = [...res];
                    this.setState({copy: p})
                    
                    this.firstTime[dia] = false;
                    console.log(p)
                }
                // el array de horas real
                this.setState({horas: [...res]})
            });
        } 
    }

    back2show = () => {
        this.firstTime = [true, true, true, true, true, true, true];

        // volver a mostrar sin editar
        this.props.back2show();
    }

    needUpdate = () => {
        if(this.props.needUpdate || this.action === 'edit'){
            return true;
        }
        return false;
    }

    render() {
        return(
            <View>
                <Semana selected={this.props.action} hasroutinee={this.hasroutine} update={this.needUpdate()} setUpdate={this.setUpdate} dayS={this.setSelected} />

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