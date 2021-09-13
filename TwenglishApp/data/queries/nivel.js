import Realm from 'realm';
import database from '../database/config';
import { Nivel } from '../models/twenglish-model';

const getNiveles = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        // const niveles = realm.objects('Nivel');

        const niveless = realm.objects('Niveles');

        let res = {
            nivel: []
        };

        let niv = {
            nombre: niveless[0].nivel_seleccionado.nombre,
            progreso: niveless[0].nivel_seleccionado.progreso
        }

        console.log(niv);
        res.nivel.push(niv);

        for (let i = 0; i < niveless[0].niveles.length; i++) {
            if(niveless[0].niveles[i].nombre != res.nivel[0].nombre) {
                console.log(niveless[0].niveles);
                niv = {
                    nombre: niveless[0].niveles[i].nombre,
                    progreso: niveless[0].niveles[i].progreso
                }
                res.nivel.push(niv);
            }
            ////////////////////////////////////////////////
            // COMENTAR CUANDO TENGA LOS NIVELES AÑADIDOS //
            ////////////////////////////////////////////////
            res.nivel.push({nombre: 'A2', proreso: 0}, {nombre: 'B1', proreso: 0}, {nombre: 'B2', proreso: 0}, {nombre: 'C1', proreso: 0}, {nombre: 'C2', proreso: 0});
        }

        resolve(res);
    }).catch((error) => reject(error,message));
});

const getNivelSeleccionado = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const niveles = realm.objects('Niveles');
        console.log(niveles[0].nivel_seleccionado);
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