import Realm from 'realm';
import { database } from '../database/config';
import { Nivel } from '../models/twenglish-model';

const getNiveles = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        console.log(realm);
        let niveles = realm.objects('Nivel');
        console.log(niveles);
        console.log(niveles.length);
        resolve(niveles);
    }).catch((error) => reject(error));
});

const getNivel = nivelNombre => new Promise((resolve, reject) => {
    console.log(nivelNombre);
    Realm.open(database).then(realm => {
        console.log(realm);
        let niveles = realm.objects('Nivel');
        console.log(niveles);
        console.log(niveles.length);
        resolve(niveles);
    }).catch((error) => reject(error.message));
});

const insertNivel = newNivel => 
    new Promise((resolve, reject) => {
        Realm.open(database).then(realm => {
            realm.write(() => {
                realm.create(Nivel, newNivel);
                resolve(newNivel);
            })
        }).catch((error) => reject(error));
    });

const updateNivel = nivel => 
    new Promise((resolve, reject) => {
        Realm.open(database).then(realm => {
            realm.write(() => {
                let nivelObtenido = realm.objectForPrimaryKey(Nivel, nivel.id);
                // nivelObtenido.nombre = nivel.nombre;
                resolve();
            })
        }).catch((error) => reject(error));
    });

const deleteNivel = nivel => 
    new Promise((resolve, reject) => {
        Realm.open(database).then(realm => {
            realm.write(() => {
                let nivelObtenido = realm.objectForPrimaryKey(Nivel, nivel.id);
                realm.delete(nivelObtenido);
                resolve();
            })
        }).catch((error) => reject(error));
    });

const deleteAllNiveles = nivel => 
    new Promise((resolve, reject) => {
        Realm.open(database).then(realm => {
            realm.write(() => {
                let nivelObtenido = realm.objects(Nivel);
                realm.delete(nivelObtenido);
                resolve();
            })
        }).catch((error) => reject(error));
    });

export { getNiveles, getNivel, insertNivel, updateNivel, deleteNivel, deleteAllNiveles }