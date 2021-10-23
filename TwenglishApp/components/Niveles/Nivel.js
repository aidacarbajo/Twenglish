import React, {Component} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { primary, secundary } from '../../assets/theme/styles';
import { GradientCircularProgress,  } from 'react-native-circular-gradient-progress';

class Nivel extends Component {
    constructor(props) {
        super(props);

        this.styles = StyleSheet.create({
            fondo: {
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 12,
                elevation: 2,
            },
            fondoT: {
                backgroundColor: 'transparent',
                padding: 10,
                marginStart: -5,
                borderRadius: 12,
            },
            padding: {
                padding: 2
            },
            textNivel: {
                textAlign: 'center',
                fontFamily: 'sen_extra_bold',
                fontSize: 12,
                marginTop: -74 / 2
            }
        });

        this.state = {
            progreso: this.props.nivel.item.progreso
        }

    }

    shouldComponentUpdate(props) {
        if(props.progreso != this.state.progreso) {
            return true;
        }
        return false;
    }

    componentDidUpdate(props) {
        this.setState({progreso: props.progreso});
    }

    sendNivel = () => {
        this.props.parentCallback(this.props.nivel.item.nombre);
    }

    getCircle = (start, middle, end) => {
        let prog = this.props.nivel.item.progreso;
        if(this.props.nivel.item.nombre === this.props.nseleccionado) {
            prog = this.state.progreso;
        }
        return (
            <Pressable onPress={this.sendNivel}>
                <GradientCircularProgress
                    size={57}
                    strokeWidth={8}
                    progress={prog}
                    emptyColor="#E3E3E3"
                    startColor={start}
                    middleColor={middle}
                    endColor={end}
                    withSnail= {true}>

                    {this.props.nivel.item.nombre === this.props.nseleccionado
                    ?   <Text style={[this.styles.textNivel, {color: secundary}]}>{this.props.nivel.item.nombre}</Text>

                    :   <Text style={[this.styles.textNivel, {color: primary}]}>{this.props.nivel.item.nombre}</Text>
                    }
                </GradientCircularProgress>  
            </Pressable>
        )
    }

    render() {
        return (
            <View style={this.styles.padding}>
                {this.props.nivel.item.nombre === this.props.nseleccionado
                ?   <View style={{flexDirection: 'row'}}>
                        <Text style={{width:30}}></Text>
                        <View style={this.styles.fondo}>
                        {this.getCircle('#EE6400', '#F34117', '#F7002D')}
                    </View>
                    </View>
                    
                :   <View style={this.styles.fondoT}>
                        {this.getCircle('#2872FC', '#4F3CFD', '#7804FF')}
                    </View>}
            </View>
        );
    }
}

export default Nivel;