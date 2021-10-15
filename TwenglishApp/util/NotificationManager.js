import PushNotification from "react-native-push-notification";
import { primary } from "../assets/theme/styles";
import { getHours, getWeek } from "../data/queries/rutina";

const icono = 'icono_twenglish';
const titulo = 'Hey student!';
const msg = "It's time to practise a little bit :)";
const lema = 'Learn faster than ever';

let options = {
    channelId: "test-channel",
    largeIcon: icono,
    color: primary,
    vibrate: true, 
    vibration: 300, 
    title: titulo, 
    message: msg, 
    subText: lema,
    allowWhileIdle: true    // que se ejecute incluso cuando el sistema esta en modo inactivo de bajo consumo de energia
}

// Se borran las anteriores, para que no se acumulen
const cleanPreviousNot = () => {
    PushNotification.cancelAllLocalNotifications();
}

// Crear una notificacion para que aparezca en ese mismo momento
export const createNotification = () => {
    cleanPreviousNot();
    PushNotification.localNotification(options);
}

// Crear una notificacion programada
export const createScheduleNotification = () => {
    cleanPreviousNot();
    cancelAllLocalNotifications();

    options["repeatType"] = 'week';
    options["repeatTime"] = 1;

    getHours().then(hoursday => {
        console.log('****');

        for(let i = 0; i < hoursday.length; i++) {
            for(let j = 0; j < hoursday[i].length; j++) {
                const hour = hoursday[i][j];
                console.log(hour);
                options["date"] = hour;
                options["id"] = i.toString() + j.toString();    // formado por el dia de la semana y la posicion del horario (para poder eliminarlo luego)
                PushNotification.localNotificationSchedule(options);
            }
        }
        
    })
}

const cancelAllLocalNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
}

const cancelOneNotification = (id) => {
    PushNotification.cancelLocalNotification(id);
}
