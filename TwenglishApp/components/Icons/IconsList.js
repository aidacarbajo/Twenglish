const lessons = '&#xf00a;';
const settings = '&#xe801;';
const calendar = '&#xf274;';
const notes = '&#xe802;';
const micro = '&#xf130;';
const back = '&#xf177;'; 
const listen = '&#xe800;';
const info = '&#xe803;';
const tick = '&#xe804;';
const wrong = '&#xe805;';
const happy = '&#xe806;';
const funny = '&#xe812;';
const surprise = '&#xe807;';

export const getIcon = (name) => {
    let icon = '';

    switch (name) {
        case 'lessons':
            icon = lessons; break;
        case 'settings':
            icon = settings; break;
        case 'calendar':
            icon = calendar; break;
        case 'notes':
            icon = notes; break;
        case 'micro':
            icon = micro; break;
        case 'back':
            icon = back; break;
        case 'listen':
            icon = listen; break;
        case 'info':
            icon = info; break;
        case 'tick':
            icon = tick; break;
        case 'wrong':
            icon = wrong; break;
        case 'happy':
            icon = happy; break;
        case 'funny':
            icon = funny; break;
        case 'surprise':
            icon = surprise; break;
        default:
            icon = happy; break;
    }
    
    return icon;
}    