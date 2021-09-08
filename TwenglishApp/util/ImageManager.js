 const Logo = require('../assets/img/logo.png');
//  const Tecnologia = require('../../assets/img/logo.png');
//  const Comida = require('../../assets/img/logo.png');
//  const Logo = require('../assets/img/logo.png');
//  const Logo = require('../assets/img/logo.png');
//  const Logo = require('../assets/img/logo.png');
//  const Logo = require('../assets/img/logo.png');
//  const Logo = require('../assets/img/logo.png');
//  const Logo = require('../assets/img/logo.png');

export const getImage = (name) => {
    let img = '';

    switch (name) {
        case 'Logo':
            img = Logo; break;
        default:
            img = Logo; break;
    }
    
    return img;
}    

 export { Logo }