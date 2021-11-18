import { modifyProgress } from "../data/queries/lecciones";
import { updateCurrentLevel } from "../data/queries/nivel";


export const calculateMedia = async(aciertofallo) => {
    const media = (aciertofallo[0]/(aciertofallo[0] + aciertofallo[1]))*100;    // media de aciertos
    const progresosModificados = modifyProgress(media);
    
    return media;
}

export const calculateLevel = async(aciertofallo) => {
    const media = (aciertofallo[0]/(aciertofallo[0] + aciertofallo[1]))*100;    // media de aciertos
    
    let level = 'A1';

    if(media > 16.7 && media < 33.4) {
        level = 'A2';
    } else {
        if(media > 33.4 && media < 50.1) {
            level = 'B1';
        } else {
            if(media > 50.1 && media < 66.8) {
                level = 'B2';
            } else {
                if(media > 66.8 && media < 83.5) {
                    level = 'C1';
                } else {
                    if(media >= 83.5) {
                        level = 'C2';
                    }
                }
            }
        }
    }

    updateCurrentLevel(level);


    return level;
}