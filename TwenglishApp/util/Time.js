export const getTime = (time) => {
    return (time < 10 ? '0' : '') + time;
}

export const getToday = () => {
    let today = new Date().getDay();
        today -= 1;

        if(today === -1) {
            today = 6;
        }

    return today;   
}