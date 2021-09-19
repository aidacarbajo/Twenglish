import React, {Component} from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { modal } from "../../assets/theme/styles";

class ModalC extends Component {
    constructor(props) {
        super(props);
        
        if(this.props.tipo === 'top') {
            this.styleSettings = {
                marginTop: 50, 
                position: 'absolute',
            }
            this.animacionS = 'bounceInRight';
            this.animacionE = 'bounceOutRight';

        } else {
            this.styleSettings = {};
            this.animacionS = 'pulse';
            this.animacionE = 'pulse';
        }
    }

    sendData = () => {
        this.props.lessonmodal(false);
    }
      
    render() {
        return (
            <Modal 
                isVisible={this.props.visible}
                hasBackdrop={false}
                animationIn={this.animacionS}
                animationInTiming={400}
                animationOut={this.animacionE}
                // animationOutTiming={500}
                coverScreen={false}
                style={[modal.all, this.styleSettings]}>
                
                <View style={[modal.content]}>
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