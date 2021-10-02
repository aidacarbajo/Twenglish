import React, {Component} from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { correcto, modal, secundary } from "../../assets/theme/styles";

class ModalC extends Component {
    constructor(props) {
        super(props);

        this.tiempoDesaparecer = 1000;
        
        if(this.props.tipo === 'top' || this.props.tipo === 'abajo') {
            this.animacionS = 'bounceInRight';
            this.animacionE = 'bounceOutRight';

            if(this.props.tipo === 'top') {
                this.styleSettings = {
                    marginTop: 50, 
                    position: 'absolute',
                }    
            } else {
                this.styleSettings = {
                    bottom: 70,
                    right: 0,
                    width: '50%',
                    height: 80,
                    position: 'absolute',
                }    
            }

        } else {
            this.styleSettings = {};
            this.animacionS = 'pulse';
            this.animacionE = 'pulse';
        }
    }

    sendData = () => {
        this.props.lessonmodal(false);
    }

    tiempoCount = () => {
        if(this.props.tiempoCount === undefined) {
            return null;
        } else {
            setTimeout(() => {
                this.props.hide(false);
            }, this.tiempoDesaparecer);
        }
    }

    shouldComponentUpdate() {
        return true;
    }
      
    render() {
        let styless = {};

        if(this.props.msg != undefined) {
            if(this.props.msg === 0) {
                styless = {backgroundColor: secundary};
            } else {
                if(this.props.msg === 1) {
                    styless = {backgroundColor: '#FF6100', };
                } else {
                    styless = {backgroundColor: correcto};
                }
            }
        }

        return (
            <Modal 
                isVisible={this.props.visible}
                hasBackdrop={false}
                animationIn={this.animacionS}
                animationInTiming={400}
                animationOut={this.animacionE}
                onModalShow={this.tiempoCount}
                coverScreen={false}
                style={[modal.all, this.styleSettings]}>
                
                <View style={[modal.content, styless]}>
                    {this.props.children}

                    {this.props.tipo === 'close' &&
                        (<Text onPress={this.sendData} style={{marginTop: 10, marginLeft: 'auto', marginRight: 'auto', textDecorationLine: 'underline'}}>Close</Text>)
                    }
                </View>

            </Modal>      
        );
    }
  }
  
  export default ModalC;