import PushNotification from "react-native-push-notification";
import { primary } from "../assets/theme/styles";
import { getHours, getWeek } from "../data/queries/rutina";

const icono = 'icono_twenglish';
const titulo = 'Hey student!';
const msg = "It's time to practise a little bit :)";
const lema = 'Learn faster english';

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
    // options["date"] = new Date(Date.now() + (5 * 1000));

    

    getHours().then(hoursday => {
        console.log('****');
        
        hoursday.map(day => {
            if(day.length > 0) {
                day.map(hour => {
                    console.log(hour);
                    // options["date"] = hour;
                    // PushNotification.localNotificationSchedule(options);
                })
            }
        })
        console.log('****');

    })
    // recorro las fechas
    

    // console.log(options);

}

const cancelAllLocalNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
}
