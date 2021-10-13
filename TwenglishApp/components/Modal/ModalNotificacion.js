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
        let styless = {};
        
        if(this.props.tipo === 'resumen') {
            if(this.props.msg === 0) {
                obj = {titulo: 'Keep working!', color: "white", icon: 'happy'};
                styless = {backgroundColor: secundary};
            } else {
                if(this.props.msg === 1) {
                    obj = {titulo: 'Good work!', color: "white", icon: 'funny'};
                    styless = {backgroundColor: '#FF6100', };
                } else {
                    let tit = "You're amazing!";    // Para el resumen del final de la leccion

                    if(typeof(this.props.msg) != Number) {
                        tit = this.props.msg;
                    }

                    obj = {titulo: tit, color: "white", icon: 'surprise'};
                    styless = {backgroundColor: correcto};
                }
            }
        } else {
            if(this.props.tipo === 'acierto') {
                obj = {titulo: 'Correct', color: correcto, icon: "tick"}
            } else {
                if(this.props.tipo === 'fallo') {
                    obj = {titulo:'Try again!', color: secundary, icon: "wrong"}
                } else {
                    obj = {titulo:'Extra', color: extra, icon: "info"}
                }
            }
        }
        
        return (
                <View style={[styless]}>
                    <View style={{flexDirection: 'row', height: 17, width: '100%'}}>
                        <Icon icon={obj.icon} color={obj.color} style={{marginRight: 5, fontSize: 12}}></Icon>
                        <MyTitle titleBold={obj.titulo} style={{color: obj.color, fontSize: 12, height: 25}}></MyTitle>
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