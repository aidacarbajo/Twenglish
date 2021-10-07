import { Pressable, View } from 'react-native';
import React, {Component} from 'react';
import { bodySub, view } from '../assets/theme/styles';
import MyTitle from '../components/Texts/MyTitle';
import MyText from '../components/Texts/MyText';

class Routine extends Component {
    constructor(props) {
        super(props);

        let today = new Date().getDay();
        today -= 1;

        if(today === -1) {
            today = 6;
        }

        // Planificacion tiene un array de tipo Day de 7 elementos (nombre: L, M, X...)
        // Day tiene un nombre y un array de tiempos

        // Peticion get de Dia por el que quiera ver el alumno en ese momento (esa seleccion que se destaque con un fondo que no sea blanco)
        // Debajo del dia de hoy hay un punto

        this.state = {
            weekDays: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],  // nombre
            selected: [true, true, false, true, false, false, false],    // se completa en funcion de si tiene algun horario guardado o no
            studentS: today // por defecto se muestra el dia de hoy, pero si aprieta sobre otro dia se selecciona ese
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    select = (index) => {
        let copy = [...this.state.selected];
        copy[index] = !copy[index];
        this.setState({selected: copy})
    }

    render() {
        return (
            <View style={[view.container, {paddingHorizontal: 50}]}>
                <MyTitle title="My" titleBold="Routine" style={{marginBottom: 10}}></MyTitle>
                <MyText title="Be constant with a routine" style={{color: bodySub}}/>

                {/* Dias de las semana */}
                    <View style={{flexDirection: 'row', marginVertical: 30, justifyContent: 'space-between'}}>
                    {
                        this.state.weekDays.map((day, index) => {
                            let noselected = {};
                            if(this.state.selected[index]) {
                                noselected = {
                                    backgroundColor: 'white',
                                    elevation: 4,
                                }
                            }
                            return(
                                <View key={index}>
                                    <Pressable onPress={() => this.select(index)} style={[noselected, {borderRadius: 12, width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}]}>
                                        <MyText title={day} key={index}/>
                                    </Pressable>
                                </View>
                            )
                        })
                    }
                    </View>
            </View>
        );    
    }

}

export default Routine;
