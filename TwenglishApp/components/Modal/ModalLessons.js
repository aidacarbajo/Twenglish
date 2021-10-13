import React, {Component} from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { button, text } from "../../assets/theme/styles";
import MyTitle from "../Texts/MyTitle";
import BlueButton from "../Buttons/BlueButton";
import MyText from "../Texts/MyText";

class ModalLessons extends Component {
    constructor(props) {
        super(props);  
    }
 
    render() {
        return (
            <View>
                <MyTitle titleBold={this.props.dataTitle} style={{fontSize: 16, padding: 4, marginBottom: 20}}></MyTitle>
                
                <BlueButton title="Start lesson" screen={this.props.empezarLeccion} style={{width: '90%'}}></BlueButton>

                <TouchableOpacity style={[button.button, button.option, {width: '90%', alignItems: 'center'}]} onPress={this.props.verApuntes}>
                  <MyText title="Notes" style={[text.primario, {padding: 0}]}></MyText>
                </TouchableOpacity>  
            </View>
        );
    }
  }
  
  export default ModalLessons;