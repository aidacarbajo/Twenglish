import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test } from "../../data/models/twenglish-model";

const schema = [Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test]; // importar todos los modelos de 'models'

export default {
    path:
      Platform.OS === 'ios'
        ? RNFS.MainBundlePath + '/twenglish.realm'
        : RNFS.DocumentDirectoryPath + '/twenglish.realm',
    schema: schema,
    schemaVersion: 64,    // hasta que no he cambiado el esquema y modificado esto no se ha hecho la nueva copia
  };