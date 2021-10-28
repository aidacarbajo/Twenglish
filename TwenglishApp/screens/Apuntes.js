import React, {Component, useEffect, NavigationActions} from 'react';
// import { TouchableOpacity, View, StatusBar, ActivityIndicator, Pressable, Text } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons, text, button, cards, secundary, body, example, fondo } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
// import Flatlist from '../components/Flatlist/Flatlist';
import { getApuntesLeccion } from '../data/queries/lecciones';
import Modal from '../components/Modal/ModalC';
import { ActivityIndicator, Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
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
            <SafeAreaView style={{paddingHorizontal: 50, paddingVertical: 60}}>

                <View style={[posiciones.abolute, posiciones.topleft]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.route.params.from, {tema: this.state.tema})}>
                        <Icon icon="back" color={secundary} style={icons.lg}></Icon>
                    </TouchableOpacity>
                </View>

                <MyTitle title={this.state.tema} titleBold="notes"></MyTitle>

                {
                    this.state.vocabulario.length > 0 &&
                    <MyTitle title={'Vocabulary'} style={{fontSize: 14, color: body, marginTop: 10, marginBottom: 8}}></MyTitle>
                }

                {this.state.vocabulario.map((element, index) => {
                    return(
                        <View style={{marginBottom: 10}}>
                            <MyText title={this.state.titulo[index]} style={{marginTop: 15}} />
                            <CardVocabulary vocabulary={element} titulo={this.state.titulo}></CardVocabulary>
                        </View>
                    );
                })}

                {
                    this.state.gramatica.length > 0 &&
                    <MyTitle title={'Grammar'} style={{fontSize: 14, color: body, marginTop: 20, marginBottom: 8}}></MyTitle>
                }
                    {this.state.gramatica.map((element, index) => {
                        return (
                            <View style={[cards.cardApuntes, cards.cards, {marginBottom: 15}]} key={index}>
                                <MyTitle title={element[0].titulo} style={{fontSize: 12, marginBottom: 10}}></MyTitle>
                                <MyText title={element[0].explicacion} style={{textAlign: 'left', marginBottom: 4, padding: 4, lineHeight: 14}}></MyText>
                                <MyText title={element[0].ejemplo} style={{textAlign: 'left', color: example, paddingHorizontal: 4}}></MyText>
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