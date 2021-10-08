import Realm from 'realm';
import database from '../database/config';


////////////////////////////////////////////////////////////////
// Devuelve sobre el dia que está seleccionado (default: hoy) //
////////////////////////////////////////////////////////////////

const getWeek = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        let names = [], selected = [], cont = 0;

        for (item of realm.objects('Dia')) {
            names.push(item.nombre);

            if(item.Horas.length > 0) {
                selected[cont] = true;
            } else {
                selected[cont] = false;
            }
            cont++;
         }

         // cuantos dias tienen rutina:
         const hasroutine = selected.includes(true);

        resolve([names, selected, hasroutine]);
    }).catch((error) => reject(error));
});


////////////////////////////////////////////////////////////////
// Devuelve sobre el dia que está seleccionado (default: hoy) //
////////////////////////////////////////////////////////////////

const getDay = (nombre) => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const day = realm.objects('Dia').filtered(`nombre == '${nombre}'`);
        if(day[0].Horas != null) {
            resolve(day[0].Horas);
        }
        resolve([]);
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


export { getDay, getWeek, updateCurrentLesson }
