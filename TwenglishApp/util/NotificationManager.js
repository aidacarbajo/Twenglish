import PushNotification from "react-native-push-notification";
import { primary } from "../assets/theme/styles";
import { getHours } from "../data/queries/rutina";

const icono = 'icono_twenglish';
const titulo = 'Hey student!';
const msg = "It's time to practise a little bit :)";
const lema = 'Learn faster than ever';

const createChannels = (channel_id) => new Promise((resolve, reject) => {
    PushNotification.channelExists(channel_id, function (exists) {
        if(exists) {
            cancelOneNotification(channel_id);
            PushNotification.deleteChannel(channel_id);
        } 
        PushNotification.createChannel({
            channelId: channel_id,
            channelName: channel_id
        }) 

        const options = {
            channelId: channel_id,
            largeIcon: icono,
            color: primary,
            vibrate: true, 
            vibration: 300, 
            title: titulo, 
            message: msg, 
            subText: lema,
            allowWhileIdle: true    // que se ejecute incluso cuando el sistema esta en modo inactivo de bajo consumo de energia,
        }
       resolve(options);
    })
  })

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

    getHours().then(hoursday => {

        for(let i = 0; i < hoursday.length; i++) {
            for(let j = 0; j < hoursday[i].length; j++) {
                
                const hour = hoursday[i][j];
                const id = i.toString() + j.toString();

                createChannels(id).then(options => {
                    options["date"] = hour;
                    options["repeatType"] = 'week';
                    options["repeatTime"] = 1;                
                    PushNotification.localNotificationSchedule(options);
                });

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
