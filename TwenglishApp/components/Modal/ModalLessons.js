import React, {Component} from "react";
import { Pressable, Text, View } from "react-native";
import { button, text } from "../../assets/theme/styles";
import MyTitle from "../Texts/MyTitle";
import BlueButton from "../Buttons/BlueButton";

class ModalLessons extends Component {
    constructor(props) {
        super(props);  
    }
 
    render() {
        return (
            <View>
                <MyTitle titleBold={this.props.dataTitle} style={{fontSize: 16, padding: 4, marginBottom: 5}}></MyTitle>
                
                <Pressable style={[button.button, button.option, {width: '90%'}]} onPress={this.props.verApuntes}>
                  <Text style={text.primario}>Notes</Text>
                </Pressable>  

                <BlueButton title="Start lesson" screen={this.props.empezarLeccion} style={{width: '90%'}}></BlueButton>

            </View>
        );
    }
  }
  
  export default ModalLessons;