import React, {Component} from 'react';
import { Pressable, Text, View } from 'react-native';
import { bold, button, cards, text } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';

class Voc_Ex6 extends Component {

    constructor(props) {
        super(props);

        this.frases = props.frases;
        this.persona = props.persona;
        this.opciones = props.opciones;
        this.tiene_opciones = [...props.tiene_opciones];
        this.options = [];

        for(let i = 0; i < props.opciones.length; i++) {
            for(let j = 0; j < props.opciones[i].opciones.length; j++) {
                if(props.opciones[i].opciones[j].esCorrecta) {
                    this.options.push(props.opciones[i].opciones[j].frase);
                }
            } 
        }
        
        // primeros que se muestran
        this.fs = [];
        let a = 0;
        while (!this.tiene_opciones[a]) {
            this.fs.push(this.frases[a]);
            a++;
        }

        // return this.getNuevos(fs);
        this.state = {
            actualFrases: a,
            actualOpciones: 0,
            fin: false
        }


    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    shouldComponentUpdate(nextProps, nextState) {                                     
        return true;                      
    }


    checkAnswer = () => {
        return true;
    }

    showCheck = (show, next) => {
        if(next == undefined) {
            this.props.buttonCheck(show);
        } else {
            this.props.buttonCheck(show, next);
        }
    }

    checkResponse = (index) => {
        let a = this.state.actualOpciones;
        let u = this.opciones[a].opciones[index];

        if(u.esCorrecta) {
            this.showCheck('acierto');

            // Modificar array de frases acertadas
            let c = this.fs;
            c.push(this.frases[this.state.actualFrases]);
            this.fs = c;

            if(this.state.actualFrases === this.frases.length - 1) {    // ejercicio completado
                this.setState({fin: true});
                this.showCheck('acierto', true);
            } else {
                this.setState({actualOpciones: a + 1, actualFrases: this.state.actualFrases + 1})
            }
        } else {
            // Cambiamos la opcion a rojo y sale el modal de error
            this.showCheck('fallo');
            // Incrementamos intentos += 1
        }
    }

   
    getOptions = () => {  
        return(
            this.opciones[this.state.actualOpciones].opciones.map((item, index) => {
                return (
                    <Pressable key={index} style={[cards.cards, cards.centrar, {padding: 10, marginTop: 25}]} onPress={() => this.checkResponse(index)}>
                        <MyText title={item.frase} style={{fontSize: 12}}></MyText>
                    </Pressable>
                );
            })
        );
    }

    opcionCorrecta = (pos) => {
        return this.options[pos-1];
    }

    hueco = (fr, dest) => {
        let frase;
        frase = fr;

        let numberOfItemsAdded = 0;
        let result = frase.split(/\{\d+\}/);   
        let x = [frase];
        
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


    fraseNueva = () => {
       const fraseActual = this.frases[this.state.actualFrases];

       let color = {backgroundColor: '#CFF0FF'};
       if(this.persona[this.state.actualFrases] % 2 == 0) {
           color = button.optionSelected;
       }

       return (
            <View style={[button.button, button.option, color, {width: '100%', flexWrap: 'wrap', paddingLeft: 10, paddingRight: 10}]}>
                {this.hueco(fraseActual)}
            </View>
       );
    }

    frasesAntiguas = () => {
        return (
            <View style={{marginTop: -20}}>
            
            {this.fs.map((item, index) => {
                let color = {backgroundColor: '#CFF0FF'};
                if(this.persona[index] % 2 == 0) {
                    color = button.optionSelected;
                }

                return (
                    <View key={index}>
                        <View style={[button.button, button.option, color, {width: '100%', flexWrap: 'wrap', paddingLeft: 10, paddingRight: 10}]}>
                            {
                                !this.tiene_opciones[index] 
                                ? (
                                    <MyText title={item} style={{textAlign: 'left', width: '100%'}}></MyText>
                                )
                                : (
                                    this.hueco(this.frases[index], index)
                                )
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
                        this.frasesAntiguas()   // desde actual hasta la primera que tenga opciones a seleccionar  
                    }
                    {
                        !this.state.fin &&
                        this.fraseNueva()
                    }
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'}}>
                        {
                            this.tiene_opciones[this.state.actualFrases] && !this.state.fin &&

                            this.getOptions()
                        }
                    </View>
                </View>
                
            </View>
        );
    }
    
}

export default Voc_Ex6;