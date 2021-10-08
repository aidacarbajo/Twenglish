const Logo = require('../assets/img/logo.png');

// Sin rutinas creadas
const Rutina = require('../assets/img/routine-empty.png')
// A1
const FoodA1 = require('../assets/img/A1/foodA1.png');
const FamilyA1 = require('../assets/img/A1/familyA1.png');
const SchoolA1 = require('../assets/img/A1/schoolA1.png');
const RoutineA1 = require('../assets/img/A1/routineA1.png');
const HomeA1 = require('../assets/img/A1/homeA1.png');
const HobbiesA1 = require('../assets/img/A1/sportsA1.png');
const CityA1 = require('../assets/img/A1/cityA1.png');
const WeatherA1 = require('../assets/img/A1/weatherA1.png');
const AnimalsA1 = require('../assets/img/A1/animalsA1.png');
const GreetingsA1 = require('../assets/img/A1/greetingsA1.png');


export const getImage = (name) => {
    let img;
    
    switch (name) {
        ///////////////////////////
        // Cuando no hay rutinas //
        ///////////////////////////
        case 'routine':
            img = Rutina; break;
        //////////////////////////////////////////////
        // IMAGENES REPRESENTATIVAS DE CADA LECCION //
        //////////////////////////////////////////////
        case 'greetingsA1':
            img = GreetingsA1; break;
        case 'foodA1':
            img = FoodA1; break;
        case 'familyA1':
            img = FamilyA1; break;
        case 'homeA1':
            img = HomeA1; break;
        case 'routineA1':
            img = RoutineA1; break;
        case 'studiesA1':
            img = SchoolA1; break;
        case 'hobbiesA1':
            img = HobbiesA1; break;
        case 'cityA1':
            img = CityA1; break;
        case 'weatherA1':
            img = WeatherA1; break;
        case 'animalsA1':
            img = AnimalsA1; break;
    
        default:
            img = Logo; break;
    } 
    return img;
}    

export const getLogo = () => {
    return Logo;
}

