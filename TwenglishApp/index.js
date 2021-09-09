/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import React from 'react';
import Realm from 'realm';
import App from './App';
import {name as appName} from './app.json';

import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test } from "./data/models/twenglish-model";
import { getNiveles } from './data/queries/nivel';

const schema = [Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test]; // importar todos los modelos de 'models'

const App2 = () => {

  // RNFS.unlink(RNFS.DocumentDirectoryPath + '/twenglish.realm')
  //   .then(() => {
  //     console.log('FILE DELETED');
  //   })
  //   // `unlink` will throw an error, if the item to unlink does not exist
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  console.log(Realm.exists({path: RNFS.DocumentDirectoryPath + '/twenglish.realm',schema: schema}));

  RNFS.copyFileAssets('twenglish.realm', RNFS.DocumentDirectoryPath + '/twenglish.realm')
  .then(() => {
      Realm.copyBundledRealmFiles();

      let realm = new Realm({
        path:
          Platform.OS === 'ios'
            ? RNFS.MainBundlePath + '/twenglish.realm'
            : RNFS.DocumentDirectoryPath + '/twenglish.realm',
        schema: schema,
        schemaVersion: 63,
        // readOnly: false
      });

      console.log(Realm.exists({path: RNFS.DocumentDirectoryPath + '/twenglish.realm', schema: schema}));

      // this.setState({ realm: realm });


        // // Comprobar que se ha hecho la copia
        const apuntes = realm.objects('Nivel');
        console.log('---------------------------');
        // console.log('Niveles: ', apuntes.length);
        console.log(apuntes);
        // console.log('---------------------------');

  });



    

    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
