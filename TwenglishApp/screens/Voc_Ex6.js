import React, {Component} from 'react';
import { Pressable, Text, View } from 'react-native';
import { bold, button, cards, text } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';

class Voc_Ex6 extends Component {

    constructor(props) {
        super(props);

        let options = [];

        // Guardamos los ints de la posicion cuando la frase tiene opcion a elegir
        let nanoIndexes = [];
        nanoIndexes = props.tiene_opciones
            .map((car, i) => car === true ? i : -1)
            .filter(index => index !== -1);

        // Guardar en this.options el valor correcto
        for(let i = 0; i < [...props.opciones].length; i++) {
            for(let j = 0; j < props.opciones[i].opciones.length; j++) {
                if(props.opciones[i].opciones[j].esCorrecta) {
                    options.push(props.opciones[i].opciones[j].frase);
                }
            } 
        }
        
        // primeros que se muestran
        let fs = [];
        let a = 0;
        while (!props.tiene_opciones[a]) {
            fs.push(props.frases[a]);
            a++;
        }

        fs.push(props.frases[a]);

        this.state = {
            nanoIndexes: nanoIndexes,
            opciones: props.opciones,
            options: options,
            tiene_opciones: [...props.tiene_opciones],
            persona: props.persona,
            actualFrases: a,
            actualOpciones: 0,
            fin: false,
            frases: props.frases,
            fs: fs
        }


    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    
    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.frases[0] != state.frases[0]) {
            let options = [];

            // Guardamos los ints de la posicion cuando la frase tiene opcion a elegir
            let nanoIndexes = [];
            nanoIndexes = nextProps.tiene_opciones
                .map((car, i) => car === true ? i : -1)
                .filter(index => index !== -1);

            // Guardar en this.options el valor correcto
            for(let i = 0; i < [...nextProps.opciones].length; i++) {
                for(let j = 0; j < nextProps.opciones[i].opciones.length; j++) {
                    if(nextProps.opciones[i].opciones[j].esCorrecta) {
                        options.push(nextProps.opciones[i].opciones[j].frase);
                    }
                } 
            }
            
            // primeros que se muestran
            let fs = [];
            let a = 0;
            while (!nextProps.tiene_opciones[a]) {
                fs.push(nextProps.frases[a]);
                a++;
            }

            fs.push(nextProps.frases[a]);

            return {
                nanoIndexes: nanoIndexes,
                opciones: nextProps.opciones,
                options: options,
                tiene_opciones: [...nextProps.tiene_opciones],
                persona: nextProps.persona,
                actualFrases: a,
                actualOpciones: 0,
                fin: false,
                frases: nextProps.frases,
                fs: fs
            }

        }
        return null;
    }


    checkAnswer = () => {
        return true;
    }

    showCheck = (show, next) => {
        this.props.buttonCheck(show, next);
    }

    shouldComponentUpdate() {
        return true;
    }

    checkResponse = (index) => {
        let a = this.state.actualOpciones;
        let u = this.state.opciones[a].opciones[index];

        if(u.esCorrecta) {
            this.showCheck('acierto', false);

            // Modificar array de frases acertadas
            let c = [...this.state.fs];

            for(let i = this.state.actualFrases + 1; i < this.state.frases.length; i++) {
                c.push(this.state.frases[i]);

                if(this.state.tiene_opciones[i]) {
                    break;
                } 
            }

            if(c.length === this.state.frases.length) {    // ejercicio completado
                this.setState({fin: true, fs: c, actualFrases: c.length - 1, actualOpciones: a + 1});
                this.showCheck('acierto', true);
            } else {
                this.setState({fs: c, actualFrases: c.length - 1, actualOpciones: a + 1})
            }
        } else {
            // Cambiamos la opcion a rojo y sale el modal de error
            this.showCheck('fallo', false);
            // Incrementamos intentos += 1
        }
    }

   
    getOptions = () => {  
        return(
            this.state.opciones[this.state.actualOpciones].opciones.map((item, index) => {
                return (
                    <Pressable key={index} style={[cards.cards, cards.centrar, {padding: 10, marginTop: 25}]} onPress={() => this.checkResponse(index)}>
                        <MyText title={item.frase}></MyText>
                    </Pressable>
                );
            })
        );
    }

    opcionCorrecta = (pos) => {
        const cual = this.state.nanoIndexes.indexOf(pos);

        if(pos < this.state.actualFrases) {
            return this.state.options[cual];
        } 
        return "___________";
    }

    hueco = (fr, dest) => {
        let frase;
        frase = fr;

        let numberOfItemsAdded = 0;
        let result = frase.split(/\{\d\}/);   
        let x = [result];
        
        let destacar = "___________";

        if(dest != undefined) {
            const rcorrecta = this.opcionCorrecta(dest);
            destacar = rcorrecta;
        }
        x.forEach((text, i) => result.splice(++numberOfItemsAdded + i, 0, destacar));

        return(
            <MyText title={result} style={{textAlign: 'left', width: '100%'}} />
        );
    }


    frasesAntiguas = () => {
        return (
            <View style={{marginTop: -20}}>
            
            {this.state.fs.map((item, index) => {
                let color = {backgroundColor: '#CFF0FF'};
                if(this.state.persona[index] % 2 == 0) {
                    color = button.optionSelected;
                }

                return (
                    <View key={index}>
                        <View style={[button.button, button.option, color, {width: '100%', flexWrap: 'wrap', paddingLeft: 10, paddingRight: 10}]}>
                            {
                                !this.state.tiene_opciones[index] 
                                ? <MyText title={item} style={{textAlign: 'left', width: '100%'}}></MyText>
                                : this.hueco(item, index)
                            }
                        </View>
                    </View>                    
                )
            })}
        </View>
        );
    }

    render() {
        return (
            <View style={{marginTop: 20, height: '100%', justifyContent: 'flex-start'}}>
            
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'center', width: '100%', marginTop: 20}}>
                    {
                        this.frasesAntiguas()   }  

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'}}>
                    {
                        this.state.tiene_opciones[this.state.actualFrases] && !this.state.fin &&
                        this.getOptions()
                    }
                    </View>
                </View>
                
            </View>
        );
    }
    
}

export default Voc_Ex6;