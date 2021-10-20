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

    // Ejercicios > Greetings
    const MorningA1 = require('../assets/img/A1/Ejercicios/Greetings/morning1.png');
    const AfternoonA1 = require('../assets/img/A1/Ejercicios/Greetings/afternoon1.png');
    const EveningA1 = require('../assets/img/A1/Ejercicios/Greetings/evening1.png');
    const NightA1 = require('../assets/img/A1/Ejercicios/Greetings/night1.png');
    const BirthdayA1 = require('../assets/img/A1/Ejercicios/Greetings/birthday.png');
    const BoyA1 = require('../assets/img/A1/Ejercicios/Greetings/happyboy.png');
    const NTMYA1 = require('../assets/img/A1/Ejercicios/Greetings/saludo.png');
    const GiftA1 = require('../assets/img/A1/Ejercicios/Greetings/gift.png');

    // Ejercicios > Family
    const FatherA1 = require('../assets/img/A1/Ejercicios/Family/FatherA1.png');
    const MotherA1 = require('../assets/img/A1/Ejercicios/Family/MotherA1.png');
    const SisterA1 = require('../assets/img/A1/Ejercicios/Family/SisterA1.png');
    const BrotherA1 = require('../assets/img/A1/Ejercicios/Family/BrotherA1.png');
    const GrandmotherA1 = require('../assets/img/A1/Ejercicios/Family/GrandmotherA1.png');
    const TallA1 = require('../assets/img/A1/Ejercicios/Family/TallA1.png');
    const EnergeticA1 = require('../assets/img/A1/Ejercicios/Family/EnergeticA1.png');
    const LongA1 = require('../assets/img/A1/Ejercicios/Family/LongA1.png');
    const ShortA1 = require('../assets/img/A1/Ejercicios/Family/ShortA1.png');
    const CurlyA1 = require('../assets/img/A1/Ejercicios/Family/CurlyA1.png');
    const BlondeA1 = require('../assets/img/A1/Ejercicios/Family/BlondeA1.png');

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
        
        ///////////////////////
        // Portadas Nivel A1 //
        ///////////////////////

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

        // Ejercicios > Greetings
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
    
        // Ejercicios > Family
        case 'FatherA1':
            img = FatherA1; break;
        case 'MotherA1':
            img = MotherA1; break;
        case 'BrotherA1':
            img = BrotherA1; break;
        case 'SisterA1':
            img = SisterA1; break;
        case 'GrandmotherA1':
            img = GrandmotherA1; break;
        case 'TallA1':
            img = TallA1; break;
        case 'EnergeticA1':
            img = EnergeticA1; break;
        case 'LongA1':
            img = LongA1; break;
        case 'BlondeA1':
            img = BlondeA1; break;
        case 'CurlyA1':
            img = CurlyA1; break;
        case 'ShortA1':
            img = ShortA1; break;

        // Ejercicios > Animals
    
        //////////////////////////
        // Portada lecciones A2 //
        //////////////////////////

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

