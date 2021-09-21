import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques } from "../../data/models/twenglish-model";
// , Horario, Listening, Notificacion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test
const schema = [Apartado, Apuntes, Ejercicio, Leccion, Nivel, Niveles, ApartadoGram, ApartadoVoc, Bloques]; // importar todos los modelos de 'models'

export default {
    path:
      Platform.OS === 'ios'
        ? RNFS.MainBundlePath + '/twenglish.realm'
        : RNFS.DocumentDirectoryPath + '/twenglish.realm',
    schema: schema,
    schemaVersion: 34,    
  };


  /*
    PASOS PARA ACTUALIZAR BBDD DESDE REALM STUDIO
    1.  Descomento en index.js el de eliminar twenglish.realm y comento el de copiar
        Poner async y await una vez y borrarlo porque sale error pero sí funciona
        Elimino manualmente el twenglish.realm

    2.  Compilo y ejecuto pa que de error de que no hay realm (así me aseguro)

    3.  Pego el nuevo archivo
        Hago un link y vuelvo a compilar con el de eliminar comentado y el de copiar sin comentar 

    4. Ya debería estar actualizado
  */