/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import React from 'react';
import Realm from 'realm';
import App from './App';
import {name as appName} from './app.json';
import * as RNFS from 'react-native-fs';
import { LogBox } from 'react-native';
import database from './data/database/config';
import PushNotification from "react-native-push-notification";
 
LogBox.ignoreAllLogs(); //Ignore all log notifications

PushNotification.configure({
    requestPermissions: Platform.OS === 'ios'
}); 


const App2 = () => {

  // await RNFS.unlink(RNFS.DocumentDirectoryPath + '/twenglish.realm')
  // .then(() => {
  //   console.log('deleted');
  //   console.log(Realm.exists(database));
  // })
  // .catch((err) => {         
  //     console.log(err);
  // })
  global.firstTime = true;

  if(!Realm.exists(database)) {
        RNFS.copyFileAssets('twenglish.realm', RNFS.DocumentDirectoryPath + '/twenglish.realm')
        .then(() => {
            Realm.copyBundledRealmFiles();
            const realm = new Realm(database);
        });
  } else {
    // global.firstTime = false;
    global.firstTime = true;
  }
    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
