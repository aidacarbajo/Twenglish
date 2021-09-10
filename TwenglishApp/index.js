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

  // await RNFS.unlink(RNFS.DocumentDirectoryPath + '/twenglish.realm');

  RNFS.copyFileAssets('twenglish.realm', RNFS.DocumentDirectoryPath + '/twenglish.realm')
  .then(() => {
      Realm.copyBundledRealmFiles();
      const realm = new Realm(database);
  });

    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
