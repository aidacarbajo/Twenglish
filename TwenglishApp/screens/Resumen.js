import React, {Component} from 'react';
import { View } from 'react-native';
import { bold, extrabold } from '../assets/theme/styles';
import RoundButton from '../components/Buttons/RoundButton';
import MyTextWhite from '../components/Texts/MyTextWhite';
import MyTitle from '../components/Texts/MyTitle';
import ModalC from '../components/Modal/ModalC';
import ModalNotificacion from '../components/Modal/ModalNotificacion';

class Resumen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            tema: this.props.route.params.leccion,
            progreso: this.props.route.params.progreso,
            isMessageVisible: false,
            _isMounted: false
        }
    }

    componentDidMount() {
        this.setState({_isMounted: true})
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    
    showModal = () => {
        setTimeout(() => {
            this.setState({isMessageVisible: true, _isMounted: false});

            setTimeout(() => {
                this.props.navigation.navigate('Lecciones');
            }, 4000);
        }, 1000);    
    }
    render() {
        let msg = 1;
        if(this.state.progreso <=49) {
            msg = 0;
        } else {
            if(this.state.progreso >=69) {
                msg = 2;
            } 
        }

        return(
            <View>
                <View style={{height: '25%', justifyContent: 'center', alignItems: 'center', top: 50}}>
                    <MyTitle title={this.state.tema} style={{fontFamily: extrabold}} />
                </View>
                
                <View style={{ height: '75%', alignItems: 'center'}}>
                    <RoundButton key={this.state.progreso} progress={true} estilo={{width: 100, height: 100, position: 'absolute'}}>
                        <MyTextWhite title={Math.round(this.state.progreso) + '%'} style={{fontSize: 50, lineHeight: 100, fontFamily: bold}}/>
                    </RoundButton>
                </View>   

                { this.state._isMounted && this.showModal()}

                <ModalC visible={this.state.isMessageVisible} tipo={'abajo'} msg={msg}>
                    <ModalNotificacion tipo={'resumen'} msg={msg}></ModalNotificacion>
                </ModalC>

            </View>
        );
    }
}

export default Resumen;