// import Realm from 'realm';
// import { Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test } from "../models/twenglish-model"

// const schema = [Apartado, Apuntes, Checklist, Ejercicio, Horario, Leccion, Listening, Nivel, Niveles, Notificacion, Opcion, Par, Pares, Planificacion, Pregunta, Respuestas, Sort, Speaking, Test]; // importar todos los modelos de 'models'
// const database = {
//     // path: './twenglish.realm',
//     path: 'twenglish.realm',
//     schema: schema,
//     schemaVersion: 0
// }

// let realmInstance: Realm | null;

// // Define a listener callback function
// function onRealmChange() {
//     console.log("Something changed!");
// }
  
// const getRealm = async ():Promise<Realm> => {
//     try {
//         if(Realm.exists(database)) {
//             Realm.copyBundledRealmFiles();
//             realmInstance = await Realm.open(database);    
//         } else {
//             realmInstance = new Realm (database);
//         }
//         // realmInstance.addListener("change", onRealmChange);

//         console.log(realmInstance.path);

//         // realmInstance.close();

//     } catch (err) {
//         console.error("Failed to open the realm", err.message);
//     }
  
//     console.log("-----------------------");

//     return realmInstance;     
// }


// const getApuntes = async () => {
//     realmInstance = await Realm.open(database);    

//     console.log(realmInstance.path)
//     const tasks = await realmInstance.objects("Apartado");
//     console.log(tasks);

//     return tasks;
// }


// const addApuntes = async () => {
//     realmInstance = await Realm.open(database);    

//     let apuntes1;
//     realmInstance.write(() => {
//         apuntes1 = realmInstance.create(Apartado.name, {
//             titulo: "Esto es un titulo",
//             explicacion: "Esta es una descripcion",
//         });
//     })
//     console.log(apuntes1);
// }


// export { getRealm, getApuntes, addApuntes };

// /*
//     OPCION 1. Ver como cambiar el path por defecto de realmIntance.path a la carpeta donde se encuentra mi twenglish.realm directamente
//     OPCION 2. Ver como hacer un push de mi twenglish.realm al path que hay por defecto (/data/data/com.twenglishapp/files/twenglish.realm) desde el código
// */