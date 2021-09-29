/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import Realm from 'realm';
import App from './App';
import {name as appName} from './app.json';

import * as RNFS from 'react-native-fs';

import database from './data/database/config';

const App2 = () => {

//   await RNFS.unlink(RNFS.DocumentDirectoryPath + '/twenglish.realm')
//   .then(() => {
//     console.log('deleted');
//     console.log(Realm.exists(database));
//   })
//   .catch((err) => {         
//       console.log(err);
//   })

  if(!Realm.exists(database)) {
        console.log('Primera vez que entro a la app')
        RNFS.copyFileAssets('twenglish.realm', RNFS.DocumentDirectoryPath + '/twenglish.realm')
        .then(() => {
            Realm.copyBundledRealmFiles();
            const realm = new Realm(database);
    
            const le = realm.objects('Ejercicio');
            console.log(le);
        });
  } else {
      console.log('No es la primera vez que entro a la app')
  }

  

    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
