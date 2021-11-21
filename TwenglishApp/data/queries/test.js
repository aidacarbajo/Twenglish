import Realm from 'realm';
import database from '../database/config';

const getTest = () => new Promise((resolve, reject) => {      
    Realm.open(database).then(realm => {
        const ejercicios = realm.objects('Test');
        resolve(ejercicios[0]);
    }).catch((error) => reject(error));
});

export { getTest }