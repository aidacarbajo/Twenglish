import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'
import MyText from '../Texts/MyText';
import Semana from './Semana';
import { getImage } from '../../util/ImageManager';
import { button, cards, icons, primary, text } from '../../assets/theme/styles';
import MyTitle from '../Texts/MyTitle';
import BlueButton from '../Buttons/BlueButton';
import RoundButton from '../Buttons/RoundButton';
import { applyChanges, deleteAnHour, getDay } from '../../data/queries/rutina';
import { createScheduleNotification } from '../../util/NotificationManager';

class Show extends Component {
    constructor(props) {
        super(props);

        this.action = 'show';

        this.tieneRutina = false;
        this.update = false;

        this.today = new Date().getDay();
        this.today -= 1;

        if(this.today === -1) {
            this.today = 6;
        }


        // Añado y elimino este array (es provisional hasta que se de a Save changes)
        this.firstTime = [true, true, true, true, true, true, true];
        this.cuantosHorarios = [0, 0, 0, 0, 0, 0, 0];
        this.modificados = [false, false, false, false, false, false, false];

        this.state = {
            dia: this.today,
            horas: [],
            copy: [{horas: []}, {horas: []}, {horas: []}, {horas: []}, {horas: []}, {horas: []}, {horas: []}]
        }
    }
  
    hideModal = () => {
        this.props.create(true, 'show');   // false porque no tiene rutina
    }

    editRoutine = () => {
        this.firstTime = [true, true, true, true, true, true, true];
        this.props.create(false, 'edit');    // true porque tiene rutina
    }

    // Vuelve a estar a falso la necesidad de actualizar
    setUpdate = () => {
        this.update = false;
        this.props.setUpdate();
    }

    hasroutine = (has) => {
        this.tieneRutina = true;
        this.props.hasroutine(!has);
    }

    removeHour = (index) => {
        var array = [...this.state.copy];
            array[this.state.dia].horas.splice(index, 1);
            this.setState({copy: array});

        this.modificados[this.state.dia] = true;
    }

    modifyRoutine = () => {
        // Le paso la copy y cuando sea diferente de lo que haya en la bbdd hacemos un write
        applyChanges(this.state.copy, this.modificados).then(res => {
            this.back2show(res);
            this.tieneRutina = res;
            this.setSelected(this.state.dia);

            // Borrar anteriores y crear nuevas cuando haya alguna modificacion
            if(this.modificados.includes(true)) {
                createScheduleNotification();
                this.update = true;        
            }
        });
    }

    loadDay = () => {
        return(
            <View style={[cards.centrar, {width: '100%', marginTop: 30, zIndex: -1}]}>
                {
                    // Si no está editando recorre el array de this.state.horas (que es la de la bbdd)
                    this.props.action === 'show' && 
                    this.state.horas.map((item, index) => {
                        return(            
                            <View key={index} style={[cards.cards, cards.cardPares, cards.centrar, {width: 180, height: 70,  marginBottom: 12}]}>
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
                            <View key={index} style={[cards.cards, cards.cardPares, cards.centrar, {width: 180, height: 70,  marginBottom: 12}]}>
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
                <TouchableOpacity onPress={() => this.props.create('', 'create')} style={{marginVertical: 5}}>
                    <RoundButton icon="+" color={primary} size={37} style={false}></RoundButton>
                </TouchableOpacity>
                }
            </View>
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

    // shouldComponentUpdate(props, state) {
    //     return true;
    // }

    setSelected = (dia) => {
        this.setState({dia: dia});

        if(this.tieneRutina) {    
            getDay(dia).then(res => {
                // array provisional
                if(this.firstTime[dia]) {
                    // Guardamos la longitud de cada uno de los dias
                    if(res.length > 0) {
                        this.cuantosHorarios[dia] = res.length;
                    }

                    let p = this.state.copy;
                    p[dia].horas = [...res];
                    this.setState({copy: p});
                    this.firstTime[dia] = false;
                }

                // Si se han creado nuevos desde la edición, se actualizan
                if(res.length > this.cuantosHorarios[dia]) {
                    this.cuantosHorarios[dia] = res.length;
                    let p = this.state.copy;
                    p[dia].horas.push(res[res.length - 1]);
                    this.setState({copy: p});
                }

                // el array de horas real
                this.setState({horas: [...res]})
            });
        } 
    }

    back2show = (norutina) => {
        this.firstTime = [true, true, true, true, true, true, true];
        this.props.back2show(norutina);
    }

    needUpdate = () => {
        if(this.props.needUpdate || this.update){
            return true;
        }
        return false;
    }

    render() {
        return(
            <View>
                <Semana selected={this.props.action} hasroutinee={this.hasroutine} update={this.needUpdate()} setUpdate={this.setUpdate} dayS={this.setSelected} />

                <View style={{height: '100%'}}>
                    {/* Cuando no hay ninguna rutina creada */}
                    { this.props.action == 'show' && !this.tieneRutina && this.norutina() } 
                    {/* Cargar dia seleccionado */}
                    { this.state.dia != undefined && this.loadDay() }
                </View>

                <View style={{position: 'absolute', bottom: 70, width: '115%', alignSelf: 'center', minHeight: 50}}>
                    {!this.tieneRutina
                        ? <BlueButton title="Create routine" screen={this.hideModal} />
                        :   [ this.props.action == 'show' 
                            ? <BlueButton title="Edit routine" screen={this.editRoutine} />
                            : <View style={{flexDirection: 'row'}}>
                                
                                <TouchableOpacity style={[button.button, button.option, {alignItems: 'center', width: '45%'}]} onPress={() => this.back2show(true)}>
                                    <MyText title="Discard" style={text.primario}></MyText>
                                </TouchableOpacity>  

                                <BlueButton title="Save changes" screen={this.modifyRoutine} style={{width: '45%'}} />
                            </View>
                        ]}
                </View>

            </View>
        )
    }
}

export default Show;