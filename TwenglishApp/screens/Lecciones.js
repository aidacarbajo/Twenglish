import React, {Component} from 'react';
import { TouchableOpacity, View, StatusBar, ActivityIndicator } from 'react-native';
import MyTitle from '../components/Texts/MyTitle';
import { view, posiciones, icons } from '../assets/theme/styles';
import Icon from '../components/Icons/Icon';
import MyText from '../components/Texts/MyText';
import Flatlist from '../components/Flatlist/Flatlist';
import { getNivel, getNiveles } from '../data/queries/nivel';
import { getLecciones } from '../data/queries/lecciones';

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

    return getNiveles().then(res => {
      // console.log(res[0].lecciones);
      if (this._isMounted) {
        this.setState({
          isLoading:false,
          lecciones: res[0].lecciones,
        }).catch( (error) => {
          console.log(error.message);
        });
      }
    }).catch( (error) => {
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
            {/* For de niveles */}

            <MyText title="What would you like to learn today?"></MyText>
            <Flatlist dataRealm={this.state.lecciones} keyy={'tema'}></Flatlist>
        </View>
      );
    }
  }
}

export default Lecciones;