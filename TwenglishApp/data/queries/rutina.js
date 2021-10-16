import Realm from 'realm';
import database from '../database/config';
import moment from 'moment';

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


const getHours = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        let hours = [];

        for (item of realm.objects('Dia')) {
            let dia = [];

            for (item of item.Horas) {
                // Le quitamos la fecha y solo dejamos la hora
                // const time = item.getHours() + ':' + item.getMinutes();
                // console.log(new Date(item));
                dia.push(item);
            }            
            hours.push(dia);
        }
        resolve(hours);
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

const createRoutine = (listDays, time) => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const days = realm.objects('Dia');

        let hoy = new Date().getDay();
            hoy -= 1;
            if(hoy === -1) {
                hoy = 6;
            }
        
        for(let i = 0; i < days.length; i++) {
            if(listDays[i]) {
                const tiempo = 'T' + (time.getHours()<10?'0':'') + time.getHours() + ':' + (time.getMinutes()<10?'0':'') + time.getMinutes() + ':00.000Z';
                let dia = moment(Date.now()).format('YYYY-MM-DD');

                if(i > hoy) {
                    dia = moment(Date.now()).add(i-hoy, 'days').format('YYYY-MM-DD');
                } else {
                    if(i < hoy) {
                        dia = moment(Date.now()).add(i-hoy+7, 'days').format('YYYY-MM-DD');
                    }
                }

                const fecha = dia + tiempo;
                // console.log('añadir', fecha);

                realm.write(() => {
                    days[i].Horas.push(fecha)
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


const deleteAnHour = (day, position) => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const dia = realm.objects('Dia').filtered(`orden == '${day}'`)

        realm.write(() => {
            dia[0].Horas.splice(position, 1);
        })
        
        resolve(dia)

    }).catch((error) => reject(error));
});


const applyChanges = (changes, modificados) => new Promise((resolve, reject) => {
    let tiene_horario = 0;

    Realm.open(database).then(realm => {
        const week = realm.objects('Dia');
        for(let index = 0; index < week.length; index++) {
            const item = week[index];

            if(modificados[index]) {
                if(changes[index].horas.length <= 0) {
                    tiene_horario++;
                    // console.log('Ha eliminado todos los elementos');
                    realm.write(() => {
                        item.Horas = [];
                    })
                    continue;
                }

                if(item.Horas.length > changes[index].horas.length) {
                    // console.log('He eliminado algun elemento de', item.nombre);

                    // Recorremos array para ver cual no está y lo eliminamos
                    for(let i = 0; i < item.Horas.length; i++) {
                        // console.log(changes[index].horas);
                        if(!isInArray(changes[index].horas, item.Horas[i])) {
                            // console.log('quiero borrar');
                            deleteAnHour(week[index].orden, i);
                        } else {
                            // console.log('coinciden')
                        }
                    }

                    function isInArray(array, value) {
                        return !!array.find(item => {
                            return item.getTime() == value.getTime();
                        });
                    }
                } 
            } else {
                // console.log('Elemento', item.nombre, 'no modificado');
                if(item.Horas.length === 0) {
                    tiene_horario++;
                }
            }
        }

        if(tiene_horario < 7) {
            resolve(true);
        } else {
            resolve(false);
        }
                
    }).catch((error) => reject(error));
});

export { getDay, getWeek, createRoutine, emptyRoutine, deleteAnHour, applyChanges, getHours }
