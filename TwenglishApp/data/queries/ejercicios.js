import Realm from 'realm';
import database from '../database/config';
// import { getNivelSeleccionado } from './nivel';

/////////////////////////////////////////////////////////////////////
// Devuelve los apuntes de la leccion que se le pasa por parametro //
/////////////////////////////////////////////////////////////////////

const getEjerciciosLeccion = (nombre) => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const apuntes = realm.objects('Leccion').filtered(`portada == '${nombre}'`);
        if(apuntes[0].explicacion != null) {
            resolve(apuntes[0].explicacion.apartados[0]);
        }
        resolve(null);
    }).catch((error) => reject(error));
});

///////////////////////////////////////////////////////////////////////////////
// Actualiza la leccion seleccionada de la portada que se pasa por parametro //
///////////////////////////////////////////////////////////////////////////////

const updateCurrentLesson = portada => 
    new Promise((resolve, reject) => {

        Realm.open(database).then(realm => {
            const lessonS = realm.objects('Leccion').filtered(`portada == '${portada}'`);
            const niveles = getNivelSeleccionado().then(res => {
                realm.write(() => {
                    res.leccion_seleccionada = lessonS[0]
                })
            })
            resolve(lessonS[0]);

        }).catch((error) => reject(error));
    });


export { getEjerciciosLeccion, updateCurrentLesson }
