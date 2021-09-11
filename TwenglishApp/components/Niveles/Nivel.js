import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { button, cards } from '../../assets/theme/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GradientCircularProgress } from 'react-native-circular-gradient-progress';

export default ( { nivel } ) => {   
    let activoStart =  '#EE6400';
    let activoMiddle =  '#F34117';
    let activoEnd =  '#F7002D';

    activoStart = '#2872FC';
    activoMiddle = '#4F3CFD';
    activoEnd = '#7804FF';
    
    const seleccionado = 'A1';

    const styles = StyleSheet.create({
        fondo: {
            backgroundColor: 'white',
            padding: 10,
            marginEnd: 10,
            borderRadius: 12,
            elevation: 2
        },
        fondoT: {
            backgroundColor: 'transparent',
            padding: 10,
            marginStart: -5,
            borderRadius: 12
        }
    });

    const getCircle = () => {
        return (
            <GradientCircularProgress
                size={57}
                strokeWidth={8}
                progress={nivel.item.progreso}
                emptyColor="#E3E3E3"
                // nivel.item.progress
                startColor={activoStart}
                middleColor={activoMiddle}
                endColor={activoEnd}
                withSnail= {true}
            ></GradientCircularProgress>  
        )
    }

    return (
        // <View style={cards.paddingLevel}>
        nivel.item.nombre === seleccionado
            ?   <View style={styles.fondo}>
                    {getCircle()}
                </View>
            :   <View style={styles.fondoT}>
                    {getCircle()}
                </View>
         
        // </View>
        
    );


    
}