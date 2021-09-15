import React, {Component, useEffect} from 'react';
// import { TouchableOpacity, View, StatusBar, ActivityIndicator, Pressable, Text } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons, text, button } from '../assets/theme/styles';
import MyText from '../components/Texts/MyText';
// import Flatlist from '../components/Flatlist/Flatlist';
import { getApuntesLeccion } from '../data/queries/lecciones';
import Modal from '../components/Modal/ModalC';
import { ActivityIndicator, Pressable, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '../components/Icons/Icon';

class Apuntes extends Component {

  constructor(props) {
    super(props);

    // los parametros que hemos enviado a través del ModalLessons
    let params = this.props.route.params;

    this.state = {
      isLoading: true,
        // isLoading: false,
        apartados: [],
        tema: params.tema,
        portada: params.portada
    //   isSettingsVisible: false,
    //   isLessonsVisible: false,
    //   temaLesson: null
    };

    _isMounted = false;
  }

  
  // se ejecuta cada vez que hay un cambio en los props
  static getDerivedStateFromProps(props, state) { 
    if(props.route.params.tema != state.tema) {
        return {
            tema: props.route.params.tema,
            portada: props.route.params.portada
            // actualizar contenido de los apuntes
        }
    }
    return null;
  }


    componentDidMount() {
        this._isMounted = true;

        return getApuntesLeccion('greetingsA1').then(res => {
            const apuntes = res;  
            console.log(apuntes[0].explicacion);

            if(this._isMounted && apuntes != null) {
                this.setState({
                    isLoading:false,
                    apartados: apuntes,
                }).catch( (error) => {
                    console.log(error.message);
                });
            }
        }).catch((error) => {
            // console.log(error.message);
        });
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
        <View style={view.container}>
            <View style={[posiciones.abolute, posiciones.topleft]}>
                <Pressable onPress={() => this.props.navigation.navigate('Lessons', {deleteModal: true})}>
                    <Icon icon="back" color={icons.dark} size={icons.lg}></Icon>
                </Pressable>
            </View>

            <View style={view.safeArea}>
              <MyTitle title={this.state.tema} titleBold="notes"></MyTitle>
            </View>

            <View>
                <Text>{this.state.apartados[0].explicacion}</Text>
            </View>

          </View>

      );
    }
  }
}

export default Apuntes;