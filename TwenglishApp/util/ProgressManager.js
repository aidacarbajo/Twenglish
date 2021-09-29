import { modifyProgress } from "../data/queries/lecciones";

export const calculateMedia = async(aciertofallo) => {
    const media = (aciertofallo[0]/(aciertofallo[0] + aciertofallo[1]))*100;    // media de aciertos
    // console.log(media);
    modifyProgress(media);
}

