import React, {Component} from 'react';
import { TouchableOpacity, View, StatusBar, ActivityIndicator } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyText from '../components/Texts/MyText';
import Flatlist from '../components/Flatlist/Flatlist';
import { getNivelSeleccionado, getNiveles } from '../data/queries/nivel';
import NivelesList from '../components/Flatlist/NivelesList';

class Lecciones extends Component {

  constructor(props) {
    super(props);

    _isMounted = false;

    this.state = {
      isLoading: true,
      lecciones: []
    };

  }

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
          <StatusBar hidden />

          <View style={[posiciones.abolute, posiciones.topright]}>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Icon icon="settings" color={icons.dark} size={icons.lg}></Icon>
            </TouchableOpacity>
          </View>

            <MyTitle title="My" titleBold="Progress"></MyTitle>

            {/* Scroll Horizontal */}
            <NivelesList></NivelesList>
            {/* For de niveles */}

            <MyText title="What would you like to learn today?"></MyText>
            <Flatlist dataRealm={this.state.lecciones} keyy={'tema'}></Flatlist>
        </View>
      );
    }
  }
}

export default Lecciones;