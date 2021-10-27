// API key
const key = `e105d21fb59c10d6ab6a04386a749917`;

/**
 * fetch data about current weather in particular place
 * @param {*} setState - callback which will saved incomming data 
 * @param {*} city - name of place that you want to download his weather forecast
 */
export const getCurrentWeather = (setState, city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => response.json())
        .then(response => {
            
            // check if response data exist
            if (response.weather) {
                return setState(response);
            }
            
            //if unsuccessful set the state, which will enable to display the view with wrong name of city
            else {
                setState(undefined);
            }
        })
        .catch(err => console.log(err))
}

/**
 * fetch and retrun data about weather forecast for next 7 days in particular place 
 * @param {*} set - callback which will saved incomming data
 * @param {*} lat - x cords
 * @param {*} lon - y cords
 */
export const getDailyWeather = (setState, lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${key}`)
        .then(r => r.json())
        .then(r => setState(r))
        .catch(err => console.log(err))
}