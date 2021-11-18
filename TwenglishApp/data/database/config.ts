import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion, Pares, Par, Conversacion, Dia, Test } from "../../data/models/twenglish-model";

const schema = [Apuntes, Apartado, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion, Pares, Par, Conversacion, Dia, Test]; // importar todos los modelos de 'models'

export default {
    path:
      Platform.OS === 'ios'
        ? RNFS.MainBundlePath + '/twenglish.realm'
        : RNFS.DocumentDirectoryPath + '/twenglish.realm',
    schema: schema,
    schemaVersion: 62,    
  };


  /*
    PASOS PARA ACTUALIZAR BBDD DESDE REALM STUDIO (si se ha modificado algo del esquema)
    1.  (ejecutado en node terminal) 
        Descomento en index.js el de eliminar archivo twenglish.realm y comento el de copiar
        Poner async y await una vez y borrarlo porque sale error pero sí funciona: [Error: File does not exist]
        
    2.  Añadir el nuevo esquema, e importar si hay una nueva clase en los imports de este archivo
      
    3.  Hago un link desde VSC, descomento, comento y R

    4. Ya debería estar actualizado
  */

  /*
    SI NO SE HA MODIFICADO EL ESQUEMA:
    1.  Eliminamos twenglish.realm y hacemos un link
    2.  Descomento en index.js el de eliminar archivo twenglish.realm y comento el de copiar
    3.  Compilamos de 0 > dará error de que no está el twenglish
    4.  Metemos el nuevo twenglish y hacemos un link de nuevo, compilamos
    5.  Control Z en index.js
    5.  Debería estar actualizado
  */