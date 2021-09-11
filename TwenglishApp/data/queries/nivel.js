import Realm from 'realm';
import database from '../database/config';
import { Nivel } from '../models/twenglish-model';

const getNiveles = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const niveles = realm.objects('Nivel');

        let res = {
            // nombre: [],
            // progreso: []
            nivel: []
        };

        for (let i = 0; i < niveles.length; i++) {
            // res.nombre.push(niveles[i].nombre);
            // res.progreso.push(niveles[i].progreso);
            let niv = {
                nombre: niveles[i].nombre,
                progreso: niveles[i].progreso
            }
            res.nivel.push(niv);
        }

        resolve(res);
    }).catch((error) => reject(error,message));
});

const getNivelSeleccionado = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const niveles = realm.objects('Niveles');
        resolve(niveles);
    }).catch((error) => reject(error.message));
});



const insertNivel = newNivel => 
    new Promise((resolve, reject) => {
        Realm.open(database).then(realm => {
            realm.write(() => {
                realm.create('Nivel', newNivel);
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

export { getNiveles, getNivelSeleccionado, insertNivel, updateNivel, deleteNivel, deleteAllNiveles }