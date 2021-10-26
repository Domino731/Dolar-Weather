// functions responsible for setting the weather (openWeather map)

const key = `e105d21fb59c10d6ab6a04386a749917`; // API key

// returning current weather in MainForecast component
// set - setting the forecast into  state
// city - searching forecast by city name
export const getCurrent =  (set, city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => response.json())
        .then(response => {
            if (response.weather) {
                return set(response);
            }
            //if unsuccessful set the state, which will enable to display the view with wrong name of city
            else{
              set(undefined);
            }  
        })
        .catch(err => console.log(err))
}



// returning daily weather in ExtendedForecast component
// set - setting the forecast into  state
// lat, lon - coords
export const getOneCall = (set, lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${key}`)
        .then(r => r.json())
        .then(r => set(r))
        .catch(err => console.log(err))
}