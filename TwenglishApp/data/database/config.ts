import Realm from 'realm';
import { Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test } from "../models/twenglish-model"

const schema = [Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test]; // importar todos los modelos de 'models'

const database = {
    path: 'twenglish.realm',
    schema: schema,
    schemaVersion: 0
}

// const realm = new Realm(database);
let realmInstance: Realm | null;

const getRealm = ():Realm => {
    
    if(realmInstance == null || realmInstance == undefined) { // en realidad no deberia de entrar nunca aqui
        // realmInstance = new Realm(database);
    }

    // console.log("-----------------------");
    // console.log("Hola");
    // // console.log(Realm.exists(database));
    // console.log(realmInstance); // es un objeto {} vacio
    // console.log("Adios");
    // console.log("-----------------------");

    return realmInstance;     
}

export default database;