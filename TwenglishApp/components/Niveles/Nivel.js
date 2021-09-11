import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { button, cards } from '../../assets/theme/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GradientCircularProgress } from 'react-native-circular-gradient-progress';

export default ( { nivel } ) => {   
    
    const seleccionado = 'A1';

    const styles = StyleSheet.create({
        fondo: {
            backgroundColor: 'white',
            padding: 10,
            marginEnd: 10,
            borderRadius: 12,
            elevation: 1
        },
        fondoT: {
            backgroundColor: 'transparent',
            padding: 10,
            marginStart: -5,
            borderRadius: 12
        }
    });

    const getCircle = (start, middle, end) => {
        return (
            <GradientCircularProgress
                size={57}
                strokeWidth={8}
                progress={nivel.item.progreso}
                emptyColor="#E3E3E3"
                // nivel.item.progress
                startColor={start}
                middleColor={middle}
                endColor={end}
                withSnail= {true}
            ></GradientCircularProgress>  
        )
    }

    return (
        // <View style={cards.paddingLevel}>
        nivel.item.nombre === seleccionado
            ?   <View style={styles.fondo}>
                    {getCircle('#EE6400', '#F34117', '#F7002D')}
                </View>
            :   <View style={styles.fondoT}>
                    {getCircle('#2872FC', '#4F3CFD', '#7804FF')}
                </View>
         
        // </View>
        
    );


    
}