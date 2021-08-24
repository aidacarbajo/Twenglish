import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
// import { getNiveles, insertNivel, deleteNivel, deleteAllNiveles, updateNivel } from '../data/queries/nivel';
import Realm from 'realm';
import database, {getRealm} from '../data/database/config';

export default class Lecciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
          FlatListItems: [],
        };
        // let realm = new Realm({ path: 'twenglish.realm' });
        // var user_details = realm.objects('Nivel');

        getRealm();

        // Realm.open(database).then(realm => {
        //     console.log(database.path);
        //     console.log(realm);     // esta vacio
        //     try {
        //         realm.write(() => {
        //             realm.create('Apartado', {titulo: 'C50', explicacion: 'he conseguido guardarlo'});
        //             console.log("A ver que tal");
        //         })
        //     }catch (e) {
        //         console.log("Error on creation");
        //       }
        // })

        // let niveles = getRealm.objects('Nivel');
        // console.log(niveles);
        // var existe = Realm.exists({ path: 'twenglish.realm' });
        // this.state = {
        //     existe: existe,
        //     FlatListItems: res,
        // };
      }
      render() {
        return (
          <View>
                <Text>Hola</Text>
                {/* <FlatList 
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text>Id: {item.nombre}</Text>
                        <Text>Name: {item.user_name}</Text>
                        <Text>Contact: {item.user_contact}</Text>
                        <Text>Address: {item.user_address}</Text>
                        </View>
                    )}
                /> */}
           </View>
        );
      }
    
}