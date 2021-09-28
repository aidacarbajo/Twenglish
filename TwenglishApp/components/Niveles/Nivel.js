import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { primary, secundary } from '../../assets/theme/styles';
import { GradientCircularProgress,  } from 'react-native-circular-gradient-progress';

export default ( { nivel, nseleccionado, parentCallback } ) => {   
    
    const seleccionado = nseleccionado;

    const styles = StyleSheet.create({
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
            fontSize: 14,
            marginTop: -74 / 2
        }
    });

    const sendNivel = () => {
        parentCallback(nivel.item.nombre);
    }

    const getCircle = (start, middle, end) => {
        return (
            <Pressable onPress={sendNivel}>
                <GradientCircularProgress
                    size={57}
                    strokeWidth={8}
                    progress={nivel.item.progreso}
                    emptyColor="#E3E3E3"
                    startColor={start}
                    middleColor={middle}
                    endColor={end}
                    withSnail= {true}>

                    {nivel.item.nombre === seleccionado
                    ?   <Text style={[styles.textNivel, {color: secundary}]}>{nivel.item.nombre}</Text>

                    :   <Text style={[styles.textNivel, {color: primary}]}>{nivel.item.nombre}</Text>
                    }
                </GradientCircularProgress>  
            </Pressable>
        )
    }

    return (
        <View style={styles.padding}>
            {nivel.item.nombre === seleccionado
            ?   <View style={{flexDirection: 'row'}}>
                    <Text style={{width:30}}></Text>
                    <View style={styles.fondo}>
                    {getCircle('#EE6400', '#F34117', '#F7002D')}
                </View>
                </View>
                
            :   <View style={styles.fondoT}>
                    {getCircle('#2872FC', '#4F3CFD', '#7804FF')}
                </View>}
        </View>
        
                
    );
}