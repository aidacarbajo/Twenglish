import Realm from 'realm';
import database from '../database/config';
import { modifyProgress } from './lecciones';

/////////////////////////////////////////////////////////////
// Devuelve los niveles ordenados para la lista de niveles //
/////////////////////////////////////////////////////////////

const getNiveles = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {

        const niveless = realm.objects('Niveles');

        let res = {
            nivel: []
        };

        let niv = {
            nombre: niveless[0].nivel_seleccionado.nombre,
            progreso: niveless[0].nivel_seleccionado.progreso
        }

        res.nivel.push(niv);

        for (let i = 0; i < niveless[0].niveles.length; i++) {
            if(niveless[0].niveles[i].nombre != res.nivel[0].nombre) {
                niv = {
                    nombre: niveless[0].niveles[i].nombre,
                    progreso: niveless[0].niveles[i].progreso
                }
                res.nivel.push(niv);
            }
        }

        resolve(res);
    }).catch((error) => reject(error,message));
});

////////////////////////////////////
// Devuelve el nivel seleccionado //
////////////////////////////////////

const getNivelSeleccionado = (test) => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        if(test != undefined) {
            const nivelS = realm.objects('Nivel').filtered(`nombre == '${test}'`);
            resolve(nivelS[0])
        } else {
            const niveles = realm.objects('Niveles');
            resolve(niveles[0].nivel_seleccionado);    
        }
    }).catch((error) => reject(error.message));
});

////////////////////////////////////////////////////////////////////
// Actualiza el nivel con el del nombre que se pasa por parametro //
////////////////////////////////////////////////////////////////////

const updateCurrentLevel = nivel => 
    new Promise((resolve, reject) => {
        Realm.open(database).then(realm => {
            const nivelS = realm.objects('Nivel').filtered(`nombre == '${nivel}'`);
            const niveles = realm.objects('Niveles');
            
            realm.write(() => {
                niveles[0].nivel_seleccionado = nivelS[0];
            })

            resolve(nivelS);

        }).catch((error) => reject(error));
    });


// const insertNivel = newNivel => 
//     new Promise((resolve, reject) => {
//         Realm.open(database).then(realm => {
//             realm.write(() => {
//                 realm.create('Nivel', newNivel);
//                 resolve(newNivel);
//             })
//         }).catch((error) => reject(error));
//     });

// const updateNivel = nivel => 
//     new Promise((resolve, reject) => {
//         Realm.open(database).then(realm => {
//             realm.write(() => {
//                 let nivelObtenido = realm.objectForPrimaryKey(Nivel, nivel.id);
//                 // nivelObtenido.nombre = nivel.nombre;
//                 resolve();
//             })
//         }).catch((error) => reject(error));
//     });

// const deleteNivel = nivel => 
//     new Promise((resolve, reject) => {
//         Realm.open(database).then(realm => {
//             realm.write(() => {
//                 let nivelObtenido = realm.objectForPrimaryKey(Nivel, nivel.id);
//                 realm.delete(nivelObtenido);
//                 resolve();
//             })
//         }).catch((error) => reject(error));
//     });

// const deleteAllNiveles = nivel => 
//     new Promise((resolve, reject) => {
//         Realm.open(database).then(realm => {
//             realm.write(() => {
//                 let nivelObtenido = realm.objects(Nivel);
//                 realm.delete(nivelObtenido);
//                 resolve();
//             })
//         }).catch((error) => reject(error));
//     });


export { getNiveles, getNivelSeleccionado, updateCurrentLevel }