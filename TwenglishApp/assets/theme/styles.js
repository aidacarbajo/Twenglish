import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $regular: 'sen_regular',
    $bold: 'sen_bold',
    $extrabold: 'sen_extra_bold',
    $primary: '#2971FD',
    $secundary: '#F7002B',
    $lila:'#7804FF',
    $body: '#4D4D4D',
    $bodySub: '#9F9F9F',
    $example: '#949494',
    $correcto: '#00C136',
    $fondoCorrecto: '#D5EFDC',
    $extra: '#00ADF7',
    $fondo: '#F6F5F8',
    $44: '2.8rem',
    $20: '1.2rem',
    $10: '0.6rem',
    $5: '0.3rem',
    $1: '0.15rem',
    $elementIcons: 'element-icons',
    $borderImage: '0.7rem',
    $bodySize: '0.75rem'
});

const regular = 'sen_regular';
const bold = 'sen_bold';
const extrabold = 'sen_extra_bold';
const primary = '#2971FD';
const secundary = '#F7002B';
const lila = '#7804FF';
const body = '#4D4D4D';
const bodySub = '#9F9F9F';
const example = '#949494';
const correcto = '#00C136';
const fondoCorrecto = '#D5EFDC';
const extra = '#00ADF7';
const fondo = '#F6F5F8';

const view = EStyleSheet.create({
    container: {
        backgroundColor: '$fondo',
        paddingVertical: '3rem',
        height: '100%'
    },
    safeArea:  {
        backgroundColor: '$fondo',
        paddingHorizontal: '3rem',
    },
    allContainers: {
        backgroundColor: '$fondo',
        paddingVertical: '3rem',
        paddingHorizontal: '3rem',
    }
});
const text = EStyleSheet.create({
    primario: {
        color: '$primary',
        fontFamily: '$regular',
    },
    primarioTitulo: {
        fontSize: '1.2rem',
        marginBottom: '1.2rem'
    },
    primarioBold: {
        fontFamily: '$extrabold',
    },
    body: {
        fontSize: '0.6rem',
        color: '$body',
        fontFamily: '$regular',
        textAlign: 'center',
        lineHeight: '1.2rem'
    },
    secundario: {
        color: '$secundary',
        fontFamily: '$regular',
    },
    lila: {
        fontFamily: '$regular',
        color: '$lila',
    },
    white: {
        color: '#fff',
    },
    rightt: {
        marginRight: '0.4rem'
    },
    opcion: {
        fontSize: '0.65rem'
    },
    buttonText: {
        backgroundColor: 'transparent',
        borderRadius: '0.8rem',
        justifyContent: 'center',
        width: '100%',
        height: '3rem',
    }
});

const button = EStyleSheet.create({
    button: {
        borderRadius: 12,
        paddingVertical: '0.1rem',        
        width: '100%',
        // en medio de la pantalla
        marginTop: '0.6rem',
        marginBottom: '0.2rem',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    primary: {
        backgroundColor: ['#2773FC', '#4D3EFD', '#7A00FF'],
         elevation: '1.2rem',
    },
    secundary: {
        backgroundColor: ['#F6002F', '#EF7B03'],
         elevation: '1.2rem',
    },
    option: {
        paddingVertical: '0.85rem',        
        marginVertical: '0.6rem',
        paddingLeft: '0.8rem',
        shadowOpacity: 0,
        borderColor: '$primary',
        borderLeftWidth: '0.1rem',
        borderRightWidth: '0.1rem',
        borderTopWidth: '0.1rem',
        borderBottomWidth: '0.1rem',
    },
    optionSelected: {
        borderColor: '#7804FF',
        backgroundColor: '#EBDAFF',
        color: '#7804FF',
    },
    round: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonListen: {
        backgroundColor: '$primary', 
        elevation: '0.5rem'
    },
    buttonNoListen: {
        borderWidth: '0.1rem', 
        borderColor: '$primary',
        backgroundColor: 'white',
    }
});


const icons = EStyleSheet.create({
    all: {
        fontFamily: '$elementIcons',
    },
    sm: {
        fontSize: '1.2rem'
    },
    lg: {
        fontSize: '1.3rem'
    },
    light: {
        color: 'white'
    },
    dark: {
        color: '#9F9F9F'
    },
    menu: {
        color: '$secundary',
    }
});

const radiobutton = EStyleSheet.create({
    radiobutton: {
       paddingVertical: '1.2rem',
   }
});

const menus = EStyleSheet.create({
    footer: {
        height: '4.2rem',
        width: '100%',
        elevation: '1.2rem',
    }
});

const posiciones = EStyleSheet.create({
    abolute: {
        position: 'absolute',
        marginHorizontal: '1.2rem',
        marginVertical: '1.2rem',
    },
    topright: {
        right: 0
    },
    topleft: {
        left: 0
    }
});


// Por hacer todavia
const cards = EStyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: '0.5rem',
        marginVertical: '0.6rem',
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
        color: '$primary',
        fontFamily: 'sen_extra_bold',
        fontSize: '0.5rem',
        paddingVertical: '0.5rem',
        paddingHorizontal: '1rem',
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: '0.4rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-5rem'
    },
    tag100: {
        fontFamily: 'sen_regular',
    },
    cardApuntes: {
        width: '100%',
    },
    cards: {
        backgroundColor: 'white',
        elevation: '0.2rem',
        borderRadius: '1.2rem',
        padding: '1.2rem',
    },
    cardPares: {
        width: '47%',
        padding: '0.5rem',
        elevation: '0.15rem',
        borderColor: 'white',
        borderLeftWidth: '0.1rem',
        borderRightWidth: '0.1rem',
        borderTopWidth: '0.1rem',
        borderBottomWidth: '0.1rem',
    },
    centrar: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    selected: {
        backgroundColor: '#CFF0FF',
        borderColor: '$extra',
    },
    correct: {
        backgroundColor: '$fondoCorrecto',
        borderColor: '$correcto',
    },
    incorrect: {
        borderColor: '$secundary',
        backgroundColor: '#FEE3E8'
    },
});

const modal = EStyleSheet.create({
    all: {
        width: '90%'
    },
    content: {
        backgroundColor: 'white', 
        borderRadius: '2rem', 
        padding: '1rem', 
        elevation: '1.2rem',
    },
});

export { text, button, icons, radiobutton, menus, view, posiciones, primary, secundary, body, bodySub, correcto, fondoCorrecto, extra, example, cards, modal, regular, extrabold, bold, fondo, lila };