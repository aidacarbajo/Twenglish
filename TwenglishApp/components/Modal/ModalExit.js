import React, {Component} from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { button, text } from "../../assets/theme/styles";
import MyTitle from "../Texts/MyTitle";
import BlueButton from "../Buttons/BlueButton";
import MyText from "../Texts/MyText";

class ModalExit extends Component {
    constructor(props) {
        super(props);  
    }

    mequedo = () => {
        this.props.mequedo(false);
    }

    mevoy = () => {
        this.props.mevoy();
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <MyTitle title="Are you sure you want to leave?" style={{fontSize: 14, padding: 4, marginBottom: 5}}></MyTitle>
                <MyText title={'¿Seguro que quieres abandonar' + (!this.props.test ? ' la lección?' : ' el test?')}></MyText>

                <BlueButton title="Exit" screen={this.mevoy} style={{marginTop: 30, marginBottom: 5}}></BlueButton>
                
                <TouchableOpacity style={[button.button, button.option, {alignItems: 'center', paddingVertical: 10}]} onPress={this.mequedo}>
                  <MyText title="Cancel" style={text.primario}></MyText>
                </TouchableOpacity>  
            </View>
        );
    }
  }
  
  export default ModalExit;