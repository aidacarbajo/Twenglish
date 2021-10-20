import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion, Pares, Par, Conversacion, Dia } from "../../data/models/twenglish-model";
// Test
const schema = [Apuntes, Apartado, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion, Pares, Par, Conversacion, Dia]; // importar todos los modelos de 'models'

export default {
    path:
      Platform.OS === 'ios'
        ? RNFS.MainBundlePath + '/twenglish.realm'
        : RNFS.DocumentDirectoryPath + '/twenglish.realm',
    schema: schema,
    schemaVersion: 59,    
  };


  /*
    PASOS PARA ACTUALIZAR BBDD DESDE REALM STUDIO
    1.  (ejecutado en node terminal) 
        Descomento en index.js el de eliminar archivo twenglish.realm y comento el de copiar
        Poner async y await una vez y borrarlo porque sale error pero sí funciona: [Error: File does not exist]
        
    2.  Si he cambiado la estructura del twenglish-model, añadir el nuevo, e importarlo en los imports de este archivo)
      
    3.  Hago un link desde VSC, descomento, comento y R

    4. Ya debería estar actualizado
  */