import { Pressable, View } from 'react-native';
import React, { Component } from 'react'
import { getWeek } from '../../data/queries/rutina';
import MyText from '../Texts/MyText';
import { primary, secundary } from '../../assets/theme/styles';

const selected = {
    backgroundColor: '#FEE3E8',
    borderColor: secundary,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,            
    elevation: 4
}

const hoy = {
    backgroundColor: '#D2EEFF',
    borderColor: primary,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,            
    elevation: 4     
}

const choosen = {
    backgroundColor: 'white',
    elevation: 4  
}


class Semana extends Component {
    constructor(props) {
        super(props);

        // hoy:
        this.today = new Date().getDay();
        this.today -= 1;

        if(this.today === -1) {
            this.today = 6;
        }

        this.state = {
            weekDays: [],  // nombre
            has: [],    // se completa en funcion de si tiene algun horario guardado o no
            hasroutine: false,  
            studentS: undefined // por defecto se muestra el dia de hoy, pero si aprieta sobre otro dia se selecciona ese
        }
    }
  
    componentDidMount() {
        this.getWeek();
    }

    update = () => {
        this.props.setUpdate();
        this.getWeek();
    }

    componentWillUnmount() {

    }

    getWeek = () => {
        return getWeek().then(res => {
            this.setState({weekDays: res[0], has: res[1], hasroutine: res[2]});

            if(this.props.selected != 'create') {
                this.props.dayS(this.state.studentS != undefined ? this.state.studentS : this.today);                
            }

            if(this.props.hasroutinee != undefined && res[2]) { // res[2] es true/false dependiendo de si hay rutina creada o no
                this.props.hasroutinee(res[2]);
            }
        })
    }

    select = (index) => {
        if(this.props.selected == 'create') {
            let copy = [...this.state.has];
            copy[index] = !copy[index];    
            this.setState({has: copy})
        } else{
            this.setState({studentS: index});
            // enviar dia seleccionado a Show.js
            this.props.dayS(index);
        }
    }

    render() {
        this.props.pressed && this.props.hasRoutinee != undefined && this.props.hasRoutinee(this.state.has);
        this.props.update && this.update();

        return(
            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
            {
                this.state.weekDays.map((day, index) => {
                    
                    // Estilo de los dias
                    let styles = {}
                    if(this.props.selected == 'create' && this.state.has[index] || this.state.studentS === index) {
                        styles = selected;
                    } else {
                        if(this.props.selected == 'show' || this.props.selected == 'edit') {
                            if(this.today === index) {
                                styles = hoy;
                            } else {
                                if(this.state.has[index]) {
                                    styles = choosen;
                                }
                            }
                        }
                    }
                    
                    const styless = [styles, {borderRadius: 12, width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}];

                    return(
                        <View key={index} style={{zIndex: 0}}>
                            <Pressable onPress={() => this.select(index)} style={styless}>
                                <MyText title={day} key={index}/>
                            </Pressable>
                        </View>
                    )
                })
                }
                </View>
            )
        }
    }

export default Semana;