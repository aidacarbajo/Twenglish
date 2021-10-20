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
 
LogBox.ignoreAllLogs();//Ignore all log notifications

PushNotification.configure({
    onNotification: function (notification) {
        // console.log("NOTIFICATION:", notification);
    },
    requestPermissions: Platform.OS === 'ios'
}); 


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
        // console.log('Primera vez que entro a la app');
        // console.log('');
        RNFS.copyFileAssets('twenglish.realm', RNFS.DocumentDirectoryPath + '/twenglish.realm')
        .then(() => {
            Realm.copyBundledRealmFiles();
            const realm = new Realm(database);
    
            const le = realm.objects('Ejercicio');
            console.log(le.length);
        });
  } else {
      console.log('No es la primera vez que entro a la app');
      console.log('');
        Realm.open(database).then(realm => {
            const le = realm.objects('Ejercicio');
            console.log(le.length);
        }).catch((error) => reject(error));
    }


  

    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
