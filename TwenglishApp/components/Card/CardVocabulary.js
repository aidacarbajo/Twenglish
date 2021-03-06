import React, {Component} from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FlatList } from 'react-native-gesture-handler';
import { cards } from '../../assets/theme/styles';
import MyText from '../Texts/MyText';

class CardVocabulary extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList 
                style={[cards.cardApuntes, cards.cards, {marginTop: EStyleSheet.value('$10')}]}
                data={this.props.vocabulary}
                keyExtractor={(item) => item.palabra }
                renderItem={(item) => 
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '45%'}}>
                            <MyText style={{textAlign: 'left', marginVertical: 0}} title={item.item.palabra}></MyText>
                        </View>
                        <View style={{width: '55%'}}>
                            <MyText style={{textAlign: 'left', marginVertical: 0}} title={item.item.traduccion}></MyText>
                        </View>
                    </View>
                }>
            </FlatList>
        );
    }
}

export default CardVocabulary;
