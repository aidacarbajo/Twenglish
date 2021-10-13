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

const getDay = orden => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const day = realm.objects('Dia').filtered(`orden == '${orden}'`);

        if(day.length > 0) {
            resolve(day[0].Horas);
        } else{
            resolve(null);
        }
        
    }).catch((error) => reject(error));
});

//////////////////////////////////////////////////////////////
// Le añadimos los nuevos horarios a los dias seleccionados //
//////////////////////////////////////////////////////////////

const createRoutine = (listDays, time) => 
    new Promise((resolve, reject) => {

        Realm.open(database).then(realm => {
            const days = realm.objects('Dia');
            
            for(let i = 0; i < days.length; i++) {
                if(listDays[i]) {
                    realm.write(() => {
                        days[i].Horas = [time]
                    })
                }
            }
            resolve(days);
        }).catch((error) => reject(error));
    });


const emptyRoutine = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        for (item of realm.objects('Dia')) {
            realm.write(() => {
                item.Horas = []
            })
        }
        resolve(true)

    }).catch((error) => reject(error));
});


export { getDay, getWeek, createRoutine, emptyRoutine }
