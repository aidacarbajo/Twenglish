import React, {Component} from 'react';
import { TouchableOpacity, View, StatusBar, ActivityIndicator, Pressable, Text } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons, text, button } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyText from '../components/Texts/MyText';
import Flatlist from '../components/Flatlist/Flatlist';
import { getNivelSeleccionado } from '../data/queries/nivel';
import NivelesList from '../components/Flatlist/NivelesList';
import Modal from '../components/Modal/ModalC';
import ModalLessons from '../components/Modal/ModalLessons';


class Lecciones extends Component {

  constructor(props) {
    super(props);

    _isMounted = false;

    this.state = {
      isLoading: true,
      lecciones: [],
      isSettingsVisible: false,
      isLessonsVisible: false,
      temaLesson: null,
      portadaName: null
    };

  }

  // se ejecuta cada vez que hay un cambio en los props
  // static getDerivedStateFromProps(props, state) { 
  //   // console.log(props);
  //   if(props.route.params != undefined && props.route.params != null && props.route.params.deleteModal) {
  //     props.params = null;
  //       return {
  //           isSettingsVisible: false,
  //           isLessonsVisible: false
  //       }
  //   }
  //   return null;
  // }


  componentDidMount() {
    this._isMounted = true;

    return getNivelSeleccionado().then(res => {
      const nivel = res[0].nivel_seleccionado;    // el primero no sera siempre el seleccionado

      if (this._isMounted) {
        this.setState({
          isLoading:false,
          lecciones: nivel.lecciones,
        }).catch( (error) => {
          console.log(error.message);
        });
      }
    }).catch((error) => {
      // console.log(error.message);
    });
  }

  // cuando se destruye el componente
  componentWillUnmount() {
    this._isMounted = false;
  }

  callbackFunction = (visible) => {
    this.setState({isSettingsVisible: visible, isLessonsVisible: false});
  }

  callbackLessons = (visible, tema, portada) => {
    // console.log('Estoy en el Lecciones y lo veo: ', visible, tema);
    if(visible) {
      this.setState({isSettingsVisible: false, isLessonsVisible: visible, temaLesson: tema, portadaName: portada});
    } else {
      this.setState({isLessonsVisible: visible, temaLesson: null, portadaName: null});
    }
  }

  irApuntes = () => {
    return this.props.navigation.navigate('Apuntes', {tema: this.state.temaLesson, portada: this.state.portadaName, from: 'Lessons'});
  }
  irLeccion = () => {
    return this.props.navigation.navigate('Voc_Ex1');
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
            <StatusBar hidden />
            {/* Modal de ajustes */}
            <Modal visible={this.state.isSettingsVisible} tipo={'top'} navigation={this.props.navigation}>
                <Pressable style={[button.button, button.option]} onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={text.primario}>Más Información</Text>
                </Pressable>  
            </Modal>

            {/* Modal de lecciones*/
            <Modal lessonmodal={this.callbackLessons} visible={this.state.isLessonsVisible} tipo={'centro'}>
              <ModalLessons dataTitle={this.state.temaLesson} verApuntes={this.irApuntes} empezarLeccion={this.irLeccion}></ModalLessons>
            </Modal>
            }
            <View style={[posiciones.abolute, posiciones.topright]}>
              <TouchableOpacity onPress={() => this.callbackFunction(!this.state.isSettingsVisible) }>
                  <Icon icon="settings" color={icons.dark} size={icons.lg}></Icon>
              </TouchableOpacity>
            </View>

            <View style={view.safeArea}>
              <MyTitle title="My" titleBold="Progress"></MyTitle>
            </View>

            <NivelesList></NivelesList>

            <View style={view.safeArea}>
              <MyText title="What would you like to learn today?"></MyText>
              <Flatlist lessonsModal={this.callbackLessons} dataRealm={this.state.lecciones} navigation={this.props.navigation}></Flatlist>
            </View>


            

          </View>

      );
    }
  }
}

export default Lecciones;