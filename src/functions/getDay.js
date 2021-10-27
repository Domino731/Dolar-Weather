/**
 * get name of the day
 * @param {object} data - data about weather forecast 
 * @param {number} number 
 * @returns string 
 */
export const getDay = (data) => {
    let allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // create new date object based on passed data
    let date = new Date(data.dt * 1000); 

    // It will give day index, and based on index we can get day name from the array.
    return allDays[date.getDay()]; 
}