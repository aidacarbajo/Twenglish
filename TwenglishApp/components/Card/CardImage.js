import React, {Component} from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { cards } from '../../assets/theme/styles';
import { getImage } from '../../util/ImageManager';
import Tag from './Tag';

class CardImage extends Component {

    constructor(props) {
        super(props);
    }

    sendData = () => {
        this.props.lessonsModal(this.props.dataTitle, this.props.dataImagen);
    }

    render() {
        return (
            <View style={[cards.card, cards.dimensions]}>
                <Pressable style={cards.back} onPress={this.sendData}>         
                    <View style={[cards.dimensions]}>
                        <ImageBackground 
                            source={getImage(this.props.dataImagen)} 
                            resizeMode="cover" 
                            style={[cards.image]} 
                            imageStyle={{ borderRadius: EStyleSheet.value('$bodySize')}}
                        >
                            <Tag data100={this.props.data100} dataTitle={this.props.dataTitle}></Tag>
                        </ImageBackground> 
                    </View>
                </Pressable>
            </View>
        );
    }
}

export default CardImage;
