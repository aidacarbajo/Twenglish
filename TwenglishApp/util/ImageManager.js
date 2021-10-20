const Logo = require('../assets/img/logo.png');

// Sin rutinas creadas
const Rutina = require('../assets/img/routine-empty.png')

// A1
    // Lecciones
    const GreetingsA1 = require('../assets/img/A1/Lecciones/greetingsA1.png');
    const FamilyA1 = require('../assets/img/A1/Lecciones/familyA1.png');
    const AnimalsA1 = require('../assets/img/A1/Lecciones/animalsA1.png');
    const WeatherA1 = require('../assets/img/A1/Lecciones/weatherA1.png');
    const FoodA1 = require('../assets/img/A1/Lecciones/foodA1.png');
    const CityA1 = require('../assets/img/A1/Lecciones/cityA1.png');

    // Ejercicios
    const MorningA1 = require('../assets/img/A1/Ejercicios/morning1.png');
    const AfternoonA1 = require('../assets/img/A1/Ejercicios/afternoon1.png');
    const EveningA1 = require('../assets/img/A1/Ejercicios/evening1.png');
    const NightA1 = require('../assets/img/A1/Ejercicios/night1.png');
    const BirthdayA1 = require('../assets/img/A1/Ejercicios/birthday.png');
    const BoyA1 = require('../assets/img/A1/Ejercicios/happyboy.png');
    const NTMYA1 = require('../assets/img/A1/Ejercicios/saludo.png');
    const GiftA1 = require('../assets/img/A1/Ejercicios/gift.png');


// A2
    // Lecciones
    const HomeA1 = require('../assets/img/A2/Lecciones/homeA1.png');
    const SchoolA1 = require('../assets/img/A2/Lecciones/schoolA1.png');
    const RoutineA1 = require('../assets/img/A2/Lecciones/routineA1.png');
    const HobbiesA1 = require('../assets/img/A2/Lecciones/sportsA1.png');


export const getImage = (name) => {
    let img;
    
    switch (name) {
        // Cuando no hay rutinas //
        case 'routine':
            img = Rutina; break;
        
            // Portadas Nivel A1 //
        case 'greetingsA1':
            img = GreetingsA1; break;
        case 'foodA1':
            img = FoodA1; break;
        case 'familyA1':
            img = FamilyA1; break;
        case 'cityA1':
            img = CityA1; break;
        case 'weatherA1':
            img = WeatherA1; break;
        case 'animalsA1':
            img = AnimalsA1; break;

        // Ejercicios
        case 'MorningA1':
            img = MorningA1; break;
        case 'AfternoonA1':
            img = AfternoonA1; break;
        case 'EveningA1':
            img = EveningA1; break;
        case 'NightA1':
            img = NightA1; break;
        case 'BirthdayA1':
            img = BirthdayA1; break;              
        case 'BoyA1':
            img = BoyA1; break;              
        case 'NTMYA1':
            img = NTMYA1; break;              
        case 'GiftA1':
            img = GiftA1; break;              
    
        // Portada lecciones A2
        case 'homeA1':
            img = HomeA1; break;
        case 'routineA1':
            img = RoutineA1; break;
        case 'studiesA1':
            img = SchoolA1; break;
        case 'hobbiesA1':
            img = HobbiesA1; break;

        default:
            img = Logo; break;
    } 
    return img;
}    

export const getLogo = () => {
    return Logo;
}

