import Realm from 'realm';
import { Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test } from "../models/twenglish-model"

const schema = [Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test]; // importar todos los modelos de 'models'

const database = {
    path: 'twenglish.realm',
    // readonly: true,
    schema: schema,
    schemaVersion: 0
}

// const realm = new Realm(database);
let realmInstance: Realm | null;


// Define a listener callback function
function onRealmChange() {
    console.log("Something changed!");
  }
  // Add the listener callback to the realm
  
const getRealm = async ():Promise<Realm> => {
        try {
            console.log(Realm.exists(database));
            console.log();
            console.log("Copiando lock");
            console.log();
            Realm.copyBundledRealmFiles();
            let realmInstance = await Realm.open(database);
            // realmInstance.addListener("change", onRealmChange);

            // let apuntes1;
            // realmInstance.write(() => {
            //     apuntes1 = realmInstance.create(Apartado.name, {
            //         titulo: "Cdigoo",
            //         explicacion: "jejejjejjejej",
            //     });
            // })
            // // console.log(apuntes1);

            const tasks = realmInstance.objects("Apartado");
            console.log(tasks.length, 'apartados');

            realmInstance.close();

            console.log(realmInstance.path);


        } catch (err) {
            console.error("Failed to open the realm", err.message);
        }
  
        // realmInstance = Realm.Configuration(database);
        // console.log(realmInstance);

    // console.log("-----------------------");
    // console.log("Hola");
    // // console.log(Realm.exists(database));
    // console.log(realmInstance); // es un objeto {} vacio
    // console.log("Adios");
    console.log("-----------------------");

    return realmInstance;     
}

export {database, getRealm};