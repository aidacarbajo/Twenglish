import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Nivel from '../Niveles/Nivel';
import { getNiveles } from '../../data/queries/nivel';

class NivelesList extends Component {

    constructor(props) {
        super(props);_isMounted = false;

        this.state = {
          isLoading: true,
          levels: [],
        };
    
      }
    
      componentDidMount() {
        this._isMounted = true;
    
        return getNiveles().then(res => {
            // console.log(res);
    
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
    
      componentWillUnmount() {
        this._isMounted = false;
      }
    

    render() {
        const styles = StyleSheet.create({
            container: {
                height: 80,
                marginBottom: 25
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
                <View style={[styles.container, {padding: 3}]}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={this.state.levels.nivel}
                        keyExtractor={(item) => item.nombre}
                        renderItem={(item) => 
                            <Nivel nivel={item}></Nivel>
                        }
                        >
                    </FlatList> 
                </View>
            );
        }
    }
}

export default NivelesList;

