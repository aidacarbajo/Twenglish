import React, {Component} from "react";
import { Pressable, Text, View } from "react-native";
import { button, correcto, extra, secundary, text } from "../../assets/theme/styles";
import MyTitle from "../Texts/MyTitle";
import BlueButton from "../Buttons/BlueButton";
import MyText from "../Texts/MyText";
import Icon from "../Icons/Icon";

class ModalNotificacion extends Component {
    constructor(props) {
        super(props);  
    }

    mequedo = () => {
        this.props.mequedo(false);
    }


    renderContent = () => {
        let obj = {titulo: '', color: '', icon: ''};
        let styless;

        this.props.tipo == 'acierto'
            ?   obj = {titulo: 'Correct', color: correcto, icon: "tick"}
            : [
                (this.props.tipo == 'fallo'
                  ? obj = {titulo:'Try again!', color: secundary, icon: "wrong"}
                  : obj = {titulo:'Extra', color: extra, icon: "info"}
                )
              ]

        return (
                <View>
                    <View style={{flexDirection: 'row', height: 17, width: '100%'}}>
                        <Icon icon={obj.icon} color={obj.color} style={{marginRight: 5, fontSize: 15}}></Icon>
                        <MyTitle titleBold={obj.titulo} style={{color: obj.color, fontSize: 13, height: 25}}></MyTitle>
                    </View>

                    {
                        this.props.tipo == 'extra'
                        && (<MyText title='My bad es una expresión' style={{fontSize:11, textAlign: 'left', marginTop: 5}}></MyText>)
                    }

                </View> 
        )
    }

    render() {
        return (
            <View>
                {
                  this.renderContent()
                }
            </View>
        );
    }
  }
  
  export default ModalNotificacion;