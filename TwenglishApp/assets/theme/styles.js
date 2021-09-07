import { StyleSheet } from 'react-native';

const regular = 'sen_regular';
const bold = 'sen_bold';
const extrabold = 'sen_extra_bold';

const primary = '#2971FD';
const secundary = '#F7002B';
const body = '#4D4D4D';

const text = StyleSheet.create({
    primario: {
        color: primary,
        fontFamily: regular,
    },
    primarioTitulo: {
        fontSize: 20,
        marginBottom: 30
    },
    primarioBold: {
        fontFamily: extrabold,
    },
    body: {
        fontSize: 14,
        color: body,
        fontFamily: regular,
        textAlign: 'center'
        // width: '100%'
    },
    secundario: {
        color: secundary,
        fontFamily: regular,
    },
    white: {
        color: '#fff',
    },
    rightt: {
        marginRight: 7
    },
    opcion: {
        fontSize: 12
    },
    buttonText: {
        backgroundColor: 'transparent',
        borderRadius: 12,
        justifyContent: 'center',
        width: '100%',
        height: 50
    }
});

const button = StyleSheet.create({
    button: {
        // colores, tamaño y texto
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        width: '100%',
        // en medio de la pantalla
        marginVertical: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    primary: {
        backgroundColor: ['#2773FC', '#4D3EFD', '#7A00FF'],
         // sombra android
         elevation: 20,
         // sombra ios
        //  shadowOffset: {
        //      width: 0,
        //      height: 1,
        //  },
        //  shadowColor: '#2B6DFD',
        //  shadowOpacity: 0.25,
        //  shadowRadius: 3.84,

    },
    secundary: {
        backgroundColor: ['#F6002F', '#EF7B03'],
         elevation: 20,
    },
    option: {
        width: '90%',
        paddingVertical: 15,
        marginVertical: 10,
        shadowOpacity: 0,
        borderColor: primary,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5
    },
    optionSelected: {
        borderColor: secundary,
        backgroundColor: '#FEE3E8',
        color: secundary
    },
    round: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


const elementIcons = 'element-icons';

const icons = StyleSheet.create({
    all: {
        fontFamily: elementIcons,
        color: '#fff',
    },
    sm: {
        fontSize: 20
    },
    lg: {
        fontSize: 30
    }
});

const radiobutton = StyleSheet.create({
    radiobutton: {
       paddingVertical: 20,
    //    backgroundColor: 'black'
   }
});

export { text, button, icons, radiobutton };
// @import './index.css';
