import React, {Component} from 'react';
import MyTitle from '../components/Texts/MyTitle';
import { posiciones, icons, cards, secundary, body, example, fondo } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
import { getApuntesLeccion } from '../data/queries/lecciones';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '../components/Icons/Icon';
import CardVocabulary from '../components/Card/CardVocabulary';
import EStyleSheet from 'react-native-extended-stylesheet';

class Apuntes extends Component {

  constructor(props) {
    super(props);

    // los parametros que hemos enviado a través del ModalLessons
    let params = this.props.route.params;

    this.state = {
        isLoading: true,
        tema: params.tema,
        portada: params.portada,
        vocabulario: [],
        gramatica: [],
        titulo: [],
        needUpdate: false
    };

    _isMounted = false;
  }

  getApuntess = (portadaID, temaID) => {
    this._isMounted = true;

    return getApuntesLeccion(portadaID).then(res => {
        const apuntes = res; 

        if(this._isMounted) {
            this.setState({
                isLoading:false,
                apuntes: apuntes,
                vocabulario: apuntes[1],
                gramatica: apuntes[2],
                titulo: apuntes[0],
                tema: temaID,
                portada: portadaID,
                needUpdate: false
            });
        }
    }).catch((error) => {
        this.setState({
            isLoading:false,
            vocabulario: [],
            gramatica: [],
            tema: temaID,
            portada: portadaID,
            titulo: [],
            needUpdate: false
        });
    });
  }

    componentDidMount() {
        this.getApuntess(this.props.route.params.portada, this.props.route.params.tema);
    }

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.route.params.tema != state.tema) {
            return {
                tema: nextProps.route.params.tema,
                portada: nextProps.route.params.portada,
                needUpdate: true
            }
        }
        return null;
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    volver = () => {
        // this.props.navigation.navigate(this.props.route.params.from, {tema: this.state.tema, portada: this.state.portada})
        this.props.navigation.goBack();
    }

 
    render() {
    if(this.state.isLoading){
      return (
          <View>
            <ActivityIndicator/>
          </View>
      )
    } else {
        this.state.needUpdate && this.getApuntess(this.state.portada, this.state.tema)

      return (
        <ScrollView style={{backgroundColor: fondo}}>            
            <SafeAreaView style={{paddingHorizontal: EStyleSheet.value('$10')*5, paddingVertical: EStyleSheet.value('$20')*3}}>

                <View style={[posiciones.abolute, posiciones.topleft]}>
                    <TouchableOpacity onPress={this.volver}>
                        <Icon icon="back" color={secundary} style={icons.lg}></Icon>
                    </TouchableOpacity>
                </View>

                <MyTitle title={this.state.tema} titleBold="notes"></MyTitle>

                {
                    this.state.vocabulario.length > 0 &&
                    <MyTitle title={'Vocabulary'} style={{fontSize: EStyleSheet.value('$10') + EStyleSheet.value('$5'), color: body, marginTop: EStyleSheet.value('$10'), marginBottom: 8}}></MyTitle>
                }

                {this.state.vocabulario.map((element, index) => {
                    return(
                        <View style={{marginBottom: EStyleSheet.value('$10')}}>
                            <MyText title={this.state.titulo[index]} style={{marginTop: EStyleSheet.value('$10') + EStyleSheet.value('$5')}} />
                            <CardVocabulary vocabulary={element} titulo={this.state.titulo}></CardVocabulary>
                        </View>
                    );
                })}

                {
                    this.state.gramatica.length > 0 &&
                    <MyTitle title={'Grammar'} style={{fontSize: EStyleSheet.value('$10') + EStyleSheet.value('$5'), color: body, marginTop: EStyleSheet.value('$20'), marginBottom: 8}}></MyTitle>
                }
                    {this.state.gramatica.map((element, index) => {
                        return (
                            <View>
                                {
                                    this.state.titulo[index + this.state.vocabulario.length] != null && this.state.titulo[index + this.state.vocabulario.length] != '' &&
                                    <MyText title={this.state.titulo[index + this.state.vocabulario.length]} style={{marginVertical: EStyleSheet.value('$10') + EStyleSheet.value('$5')}} />
                                }
                                <View style={[cards.cardApuntes, cards.cards, {marginBottom: EStyleSheet.value('$10') + EStyleSheet.value('$5')}]} key={index}>
                                    <MyTitle title={element[0].titulo} style={{fontSize: EStyleSheet.value('$bodySize'), marginBottom: EStyleSheet.value('$10')}}></MyTitle>
                                    {
                                        element[0].explicacion != null && element[0].explicacion != '' &&
                                        <MyText title={element[0].explicacion} style={{textAlign: 'left', marginBottom: 4, padding: 4, lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$5')}}></MyText>
                                    }
                                    <MyText title={element[0].ejemplo} style={{textAlign: 'left', color: example, paddingHorizontal: 4, lineHeight: EStyleSheet.value('$10') + EStyleSheet.value('$5')}}></MyText>
                                </View>
                            </View>
                        );     
                    })}

                
            </SafeAreaView>
        </ScrollView>
      );
    }
  }
}

export default Apuntes;