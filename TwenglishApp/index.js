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

const schema = [Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test]; // importar todos los modelos de 'models'

const App2 = () => {
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

        // Comprobar que se ha hecho la copia
        const apuntes = realm.objects('Nivel');
        console.log('---------------------------');
        console.log('Niveles: ', apuntes.length);
        console.log(apuntes);
        console.log('---------------------------');
    });

    

    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => App2);
