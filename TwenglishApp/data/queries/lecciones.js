import Realm from 'realm';
import database from '../database/config';
import { Leccion } from '../models/twenglish-model';

const getLecciones = () => new Promise((resolve, reject) => {
    Realm.open(database).then(realm => {
        let lecciones = realm.objects('Leccion');
        // realm.close();
        resolve(lecciones);
    }).catch((error) => reject(error));
});

export { getLecciones }
