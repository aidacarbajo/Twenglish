import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Nivel from '../Niveles/Nivel';
import { getNiveles } from '../../data/queries/nivel';

class NivelesList extends Component {

    constructor(props) {
        super(props);
        _isMounted = false;

        this.state = {
          isLoading: true,
          levels: [],
          nivelSeleccionado: 'A1'
        };

        this.callbackFunction = (nivelSeleccionado) => {
            this.setState({nivelSeleccionado: nivelSeleccionado});
            ////////////////////////
            // Cambiar nivel aqui //
            ////////////////////////
            this.getLevels();
        }

        this.getLevels = () => {
            return getNiveles().then(res => {
                if (this._isMounted) {
                    this.setState({
                        isLoading:false,
                        levels: res
                    }).catch( (error) => {
                        console.log(error.message);
                    });
                }
            }).catch((error) => {
            // console.log(error.message);
            });
        }
    
      }

    componentDidMount() {
        this._isMounted = true;
        this.getLevels();
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                height: 90,
                justifyContent: 'center',
                marginBottom: 25,
                // marginLeft: 10,
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
                        data={this.state.levels.nivel}
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

