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
import EStyleSheet from 'react-native-extended-stylesheet';

class Lecciones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      lecciones: [],
      isSettingsVisible: false,
      isLessonsVisible: false,
      temaLesson: null,
      portadaName: null,
      update: false,
      nivel: null,
      beginner: null
    };

  }

  componentDidMount() {
    if(!isNaN(Math.round(this.props.test))) {
      this.changeLessons(null)
    } else {
      this.changeLessons(this.props.test)
    }
  }

  // cuando se destruye el componente
  componentWillUnmount() {
    // this._isMounted = false;
  }

  receivedUpdate = () => {  // si test no es undefined es que hay que actualizar el nivel seleccionado
    this.changeLessons(null);
  }


  // actualizar lecciones porque se ha cambiado de nivel seleccionado
  changeLessons = (test) => {
    return getNivelSeleccionado(test).then(res => {
      const nivel = res; 

      this.setState({
        isLoading: false,
        lecciones: nivel.lecciones,
        progreso: nivel.progreso,
        nivel: nivel.nombre,
        first: false
      }).catch( (error) => {
        // console.log(error.message);
      });
      
    }).catch((error) => {
      // console.log(error.message);
    });
  }

  // ver modal info
  callbackFunction = (visible) => {
    this.setState({isSettingsVisible: visible, isLessonsVisible: false});
  }

  // ver modal al apretar sobre una leccion
  callbackLessons = (visible, tema, portada) => {
    if(visible) {
      this.setState({isSettingsVisible: false, isLessonsVisible: visible, temaLesson: tema, portadaName: portada});
    } else {
      this.setState({isLessonsVisible: visible, temaLesson: null, portadaName: null});
    }
  }

  irApuntes = () => {
    this.callbackFunction(false);
    console.log(this.props);
    return this.props.navigation.navigate('Apuntes', {tema: this.state.temaLesson, portada: this.state.portadaName, from: 'Lessons'});
  }
  irLeccion = () => {
    this.callbackFunction(false);
    return this.props.navigation.navigate('Ejercicios', {tema: this.state.temaLesson, portada: this.state.portadaName, update: this.receivedUpdate});
  }
 
  render() {
    if(this.state.isLoading){
      return (
          <View>
            <StatusBar hidden />
          </View>
      )
    } else {
      return (        
        <View style={view.container}>
            <StatusBar hidden />
            {/* Modal de ajustes */}
            <Modal visible={this.state.isSettingsVisible} tipo={'top'} navigation={this.props.navigation}>
                <TouchableOpacity style={[button.button, button.option, {alignItems: 'center', width: '95%', paddingVertical: EStyleSheet.value('$bodySize')}]} onPress={() => this.props.navigation.navigate('Settings')}>
                    <MyText title={"M??s Informaci??n"} style={text.primario} />
                </TouchableOpacity>  
            </Modal>

            {/* Modal de lecciones*/
            <Modal lessonmodal={this.callbackLessons} visible={this.state.isLessonsVisible} tipo={'close'}>
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

            <NivelesList nivelSel={this.changeLessons} nivel={this.state.nivel} progreso={this.state.progreso}></NivelesList>

            <View style={[view.safeArea, {paddingBottom: EStyleSheet.value('$10')*3}]}>
              <MyText title="What would you like to learn today?" style={{marginBottom: EStyleSheet.value('$10') + EStyleSheet.value('$5')}}></MyText>
              <Flatlist lessonsModal={this.callbackLessons} dataRealm={this.state.lecciones} navigation={this.props.navigation}></Flatlist>
            </View>

          </View>

      );
    }
  }
}

export default Lecciones;