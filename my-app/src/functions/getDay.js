// that function is used to return the name of the day

export const getDay = (data, number) => {
    let allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(data[number].dt * 1000); // to get the DateTime.
    let dayName = allDays[d.getDay()]; // It will give day index, and based on index we can get day name from the array.
    return dayName
}