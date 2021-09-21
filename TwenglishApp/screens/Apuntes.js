import React, {Component, useEffect, NavigationActions} from 'react';
// import { TouchableOpacity, View, StatusBar, ActivityIndicator, Pressable, Text } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons, text, button, cards, secundary, body, example } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
// import Flatlist from '../components/Flatlist/Flatlist';
import { getApuntesLeccion } from '../data/queries/lecciones';
import Modal from '../components/Modal/ModalC';
import { ActivityIndicator, Pressable, StatusBar, Text, View } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '../components/Icons/Icon';
import CardVocabulary from '../components/Card/CardVocabulary';

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
                vocabulario: apuntes.listaVocabulario,
                gramatica: apuntes.listaGramatica,
                tema: temaID,
                portada: portadaID,
            });
        }
    }).catch((error) => {
        // console.log('Esta lección no tiene apuntes');   // en realidad todas las lecciones tienen apuntes
        this.setState({
            isLoading:false,
            vocabulario: [],
            gramatica: [],
            tema: temaID,
            portada: portadaID,
        });
    });
  }

    componentDidMount() {
        return this.getApuntess(this.props.route.params.portada, this.props.route.params.tema);
    }

  
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.route.params.tema !== this.state.tema) {
            return this.getApuntess(nextProps.route.params.portada, nextProps.route.params.tema);
        }
    }


    componentWillUnmount() {
        this._isMounted = false;
    }
 
    render() {
    if(this.state.isLoading){
      return (
          <View>
            <ActivityIndicator/>
          </View>
      )
    } else {
      return (
        <View style={view.allContainers}>
            <View style={[posiciones.abolute, posiciones.topleft]}>
                <Pressable onPress={() => this.props.navigation.navigate(this.props.route.params.from, {tema: this.state.tema})}>
                    <Icon icon="back" color={secundary} size={icons.lg}></Icon>
                </Pressable>
            </View>

            <MyTitle title={this.state.tema} titleBold="notes"></MyTitle>

            <View style={{marginBottom: 1}}>
                <MyTitle title={'Grammar'} style={{fontSize: 18, color: body, marginVertical: 15}}></MyTitle>
                    {this.state.gramatica.map((element) => {
                        return (
                            <View style={[cards.cardApuntes, {marginBottom: 15}]} key={element.titulo}>
                                <MyTitle title={element.titulo} style={{fontSize: 14, marginBottom: 10}}></MyTitle>
                                <MyText title={element.explicacion} style={{fontSize: 12, textAlign: 'left', marginBottom: 10, padding: 4}}></MyText>
                                <MyText title={element.ejemplo} style={{fontSize: 12, textAlign: 'left', color: example, paddingHorizontal: 4}}></MyText>
                            </View>
                        );     
                    })}
            </View>                

            <View>
                <MyTitle title={'Vocabulary'} style={{fontSize: 18, color: body, marginVertical: 15}}></MyTitle>
                <CardVocabulary vocabulary={this.state.vocabulario}></CardVocabulary>
            </View>
          </View>

      );
    }
  }
}

export default Apuntes;