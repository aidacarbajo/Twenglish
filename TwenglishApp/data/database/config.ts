import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion } from "../../data/models/twenglish-model";
// , Horario, Listening, Notificacion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test
const schema = [Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques, RadioButton, Opcion]; // importar todos los modelos de 'models'

export default {
    path:
      Platform.OS === 'ios'
        ? RNFS.MainBundlePath + '/twenglish.realm'
        : RNFS.DocumentDirectoryPath + '/twenglish.realm',
    schema: schema,
    schemaVersion: 40,    
  };


  /*
    PASOS PARA ACTUALIZAR BBDD DESDE REALM STUDIO
    1.  Elimino manualmente el twenglish.realm
        Descomento en index.js el de eliminar twenglish.realm y comento el de copiar
        Poner async y await una vez y borrarlo porque sale error pero sí funciona
        
    3.  Pego el nuevo archivo
        Hago un link, decomento, comento y vuelvo a compilar

    4. Ya debería estar actualizado
  */