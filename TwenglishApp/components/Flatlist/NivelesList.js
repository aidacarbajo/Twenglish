import React, { Component, GetDerivedStateFromProps } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Nivel from '../Niveles/Nivel';
import { getNiveles, updateCurrentLevel } from '../../data/queries/nivel';

class NivelesList extends Component {

    constructor(props) {
        super(props);

        _isMounted = false;

        this.state = {
          isLoading: true,
          firstTime: true,
          levels: [],
          nivelSeleccionado: null,
          progreso: this.props.progreso,
          nivel: this.props.nivel
        };

        this.callbackFunction = (nivelSeleccionado) => {
            this.setState({nivelSeleccionado: nivelSeleccionado});
            updateCurrentLevel(nivelSeleccionado).then(res => {
                this.getLevels(true, this.props);
                
            });
            this.props.nivelSel();
        }

    }

    getLevels = (ya, props) => {
        return getNiveles().then(res => {
            if (ya) {
                this.setState({
                    levels: res.nivel,
                    isLoading:false,
                    nivelSeleccionado: res.nivel[0].nombre,
                    firstTime: false,
                    nivel: props.nivel,
                    progreso: props.progreso
                }).catch( (error) => {
                    console.log(error.message);
                });
            }
        }).catch((error) => {
        // console.log(error.message);
        });
    // }
    }

    componentDidMount() {
        this.getLevels(true, this.props);
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }

    shouldComponentUpdate(props) {
        if(this.state.nivel != props.nivel || this.state.firstTime) {
            return true;
        } else {
            return false;
        }
    }
    componentDidUpdate(props) {
        this.getLevels(true, props);
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                height: 90,
                justifyContent: 'center',
                marginBottom: 25,
            }
        });

        if(this.state.isLoading){
            return (
                <View>
                  <ActivityIndicator/>
                </View>
            )
          } else {
            return (                
                <View style={[styles.container]}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={this.state.levels}
                        keyExtractor={(item) => item.nombre} 
                        renderItem={(item) =>  
                            <View>
                                <Nivel nivel={item} nseleccionado={this.state.nivelSeleccionado} parentCallback = {this.callbackFunction}></Nivel>
                            </View>
                        }
                        >
                    </FlatList>
                </View>
            );
        }
    }
}

export default NivelesList;