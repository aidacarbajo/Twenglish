import { StyleSheet } from 'react-native';

const regular = 'sen_regular';
const bold = 'sen_bold';
const extrabold = 'sen_extra_bold';

const primary = '#2971FD';
const secundary = '#F7002B';
const body = '#4D4D4D';
const example = '#949494';
const correcto = '#00C136';
const extra = '#00ADF7';
const fondo = '#F6F5F8';

const view = StyleSheet.create({
    container: {
        backgroundColor: fondo,
        paddingVertical: 60,
        height: '100%'
    },
    safeArea:  {
        backgroundColor: fondo,
        paddingHorizontal: 50,
    },
    allContainers: {
        backgroundColor: fondo,
        paddingVertical: 60,
        // height: '100%',
        paddingHorizontal: 50,
    }
});
const text = StyleSheet.create({
    primario: {
        color: primary,
        fontFamily: regular,
    },
    primarioTitulo: {
        fontSize: 20,
        marginBottom: 20
    },
    primarioBold: {
        fontFamily: extrabold,
    },
    body: {
        fontSize: 12,
        color: body,
        fontFamily: regular,
        textAlign: 'center',
        lineHeight: 20
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
        fontSize: 10
    },
    buttonText: {
        backgroundColor: 'transparent',
        borderRadius: 12,
        justifyContent: 'center',
        width: '100%',
        height: 50,
    }
});

const button = StyleSheet.create({
    button: {
        // colores, tamaño y texto
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 12,
        width: '100%',
        // en medio de la pantalla
        marginTop: 10,
        marginBottom: 5,
        marginRight: 'auto',
        marginLeft: 'auto',
        // paddingVertical: 20
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
        paddingVertical: 12,        
        marginVertical: 10,
        shadowOpacity: 0,
        borderColor: primary,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
    },
    optionSelected: {
        borderColor: secundary,
        backgroundColor: '#FEE3E8',
        color: secundary,
        paddingLeft: 15,
        paddingVertical: 15
    },
    round: {
        width: 44,
        height: 44,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonListen: {
        backgroundColor: primary, 
        elevation: 5
    },
    buttonNoListen: {
        borderWidth: 1, 
        borderColor: primary,
        backgroundColor: 'white',
        // elevation: 5
    }
});


const elementIcons = 'element-icons';

const icons = StyleSheet.create({
    all: {
        fontFamily: elementIcons,
        // color: '#fff',
    },
    sm: {
        fontSize: 20
    },
    lg: {
        fontSize: 22
    },
    light: {
        color: 'white'
    },
    dark: {
        color: '#9F9F9F'
    },
    menu: {
        color: secundary,
    }
});

const radiobutton = StyleSheet.create({
    radiobutton: {
       paddingVertical: 20,
    //    backgroundColor: 'black'
   }
});

const menus = StyleSheet.create({
    footer: {
        height: 70,
        // backgroundColor: "green",
        width: '100%',
        elevation: 20,
    }
});

const posiciones = StyleSheet.create({
    abolute: {
        position: 'absolute',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    topright: {
        right: 0
    },
    topleft: {
        left: 0
    }
});

const cards = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 5,
        marginVertical: 10,
    },
    padding: {
        paddingHorizontal: 15,
        marginBottom: 135,
        flex: 1,
    },
    paddingLevel: {
        paddingEnd: 15,
    },
    back: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
    },
    dimensions: {
        width: 122,
        height: 142
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    height: {
        height: '100%'
    },
    tag: {
        color: primary,
        fontFamily: 'sen_extra_bold',
        fontSize: 8,
        paddingVertical: 8,
        paddingHorizontal: 15,
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -60
    },
    tag100: {
        fontFamily: 'sen_regular',
    },
    cardApuntes: {
        width: '100%',
    },
    cards: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 20,
        padding: 20,
    },
    cardPares: {
        width: '47%',
        padding: 15,
        elevation: 3,
        borderColor: 'white',
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,   
    },
    centrar: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    selected: {
        backgroundColor: '#CFF0FF',
        borderColor: extra,
    },
    correct: {
        backgroundColor: '#D5EFDC',
        borderColor: correcto,
    },
    incorrect: {
        borderColor: secundary,
        backgroundColor: '#FEE3E8'
    },
});

const modal = StyleSheet.create({
    all: {
        width: '90%'
    },
    content: {
        backgroundColor: 'white', 
        borderRadius: 26, 
        padding: 15, 
        elevation: 20,
    },
});

export { text, button, icons, radiobutton, menus, view, posiciones, primary, secundary, body, correcto, extra, example, cards, modal, regular, extrabold, bold, fondo };