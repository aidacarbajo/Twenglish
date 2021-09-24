import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion, Pares, Par } from "../../data/models/twenglish-model";
// , Horario, Listening, Notificacion, Planificacion, Sort, Speaking, Test
const schema = [Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion, Pares, Par]; // importar todos los modelos de 'models'

export default {
    path:
      Platform.OS === 'ios'
        ? RNFS.MainBundlePath + '/twenglish.realm'
        : RNFS.DocumentDirectoryPath + '/twenglish.realm',
    schema: schema,
    schemaVersion: 45,    
  };


  /*
    PASOS PARA ACTUALIZAR BBDD DESDE REALM STUDIO
    1.  Elimino manualmente el twenglish.realm
        Descomento en index.js el de eliminar archivo twenglish.realm y comento el de copiar
        Poner async y await una vez y borrarlo porque sale error pero sí funciona: [Error: File does not exist]
        
    2.  Control + C (y si he añadido nuevos objetos modificar el twenglish-model y añadirlo en los imports de este archivo)
        
    3.  Pego el nuevo archivo
        Hago un link, descomento, comento y vuelvo a compilar

    4. Ya debería estar actualizado
  */