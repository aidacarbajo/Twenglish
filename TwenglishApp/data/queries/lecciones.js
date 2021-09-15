import Realm from 'realm';
import database from '../database/config';
import { Leccion } from '../models/twenglish-model';

const getLecciones = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const lecciones = realm.objects('Leccion');
        resolve(lecciones);
    }).catch((error) => reject(error));
});

const getApuntesLeccion = (nombre) => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        const apuntes = realm.objects('Leccion').filtered(`portada == '${nombre}'`);
        if(apuntes[0].explicacion != null) {
            resolve(apuntes[0].explicacion.apartados);
        }
        resolve(null);
    }).catch((error) => reject(error));
});

export { getLecciones, getApuntesLeccion }
