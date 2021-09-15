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

  // RNFS.unlink(RNFS.DocumentDirectoryPath + '/twenglish.realm')
  // .then(() => {
  //   console.log('deleted');
  //   console.log(Realm.exists(database));
  // })
  // .catch((err) => {         
  //     console.log(err);
  // })

  RNFS.copyFileAssets('twenglish.realm', RNFS.DocumentDirectoryPath + '/twenglish.realm')
  .then(() => {
      // console.log('copiado');
      Realm.copyBundledRealmFiles();
      const realm = new Realm(database);

      // const le = realm.objects('Nivel');
      // console.log(le);
  });

    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
