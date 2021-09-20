import React, {Component} from "react";
import { Pressable, Text, View } from "react-native";
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
                <MyTitle title="Are you sure you want to leave?" style={{fontSize: 16, padding: 4, marginBottom: 5}}></MyTitle>
                <MyText title="¿Seguro que quieres abandonar la lección?"></MyText>
                {/* onPress={this.props.verApuntes} */}

                <BlueButton title="Exit" screen={this.mevoy} style={{marginTop: 30, marginBottom: 5}}></BlueButton>
                
                <Pressable style={[button.button, button.option, {width: '100%'}]}>
                  <Text style={text.primario} onPress={this.mequedo}>Cancel</Text>
                </Pressable>  
            </View>
        );
    }
  }
  
  export default ModalExit;