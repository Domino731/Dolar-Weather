//this component displays the weather for the next 7 days
//the props which he gets are responsible for getting the specific location (by getOneCall function)
// it's used in MainForecast component

import {useEffect, useState} from "react";
import {getOneCall} from "../functions/getWeather"; // return daily weather
import {getDay} from "../functions/getDay"; // return specific day of the week
import {getIcon} from "../functions/getIcon"; // return the weather icon


export const ExtendedForecast = ({lat, lon}) => {
    //this state contains weather
    const [extendedForecast, setExtendedForecast] = useState("")

    //setting the weather state (by getOneCall function)
    useEffect(() => {
        getOneCall(setExtendedForecast, lat, lon)
    }, [lat, lon,])

    //blocking display if the weather has not been downloaded yet
    if (extendedForecast === "") {
        return null
    }

    //rendering daily weather by DailyWeather component
    return (<>
            <div className="extendedForecast">
                {
                    extendedForecast.daily.map((el, key) => {
                        return <DailyWeather daily={extendedForecast} dayNumber={key} key={key}/>
                    })
                }
            </div>
        </>
    )
}

//he get from props information responsible for daily weather
// -daily => array with daily weather
// -dayNumber => number of the day, which helps to find weather from array
const DailyWeather = ({daily, dayNumber}) => {

    const [sky] = useState(daily.daily[dayNumber].weather[0].main) // sky
    const [temperature_max] = useState(daily.daily[dayNumber].temp.max) // max temperature of the day
    const [temperature_min] = useState(daily.daily[dayNumber].temp.min) // min temperature of the day
    const [wind] = useState(daily.daily[dayNumber].wind_speed) // wind speed
    const [humidity] = useState(daily.daily[dayNumber].humidity) // humidity
    const [pressure] = useState(daily.daily[dayNumber].pressure) // pressure

    return (
        <div className="extendedDaily__box">
            {/*day of the week received by getDay function*/}
            <h1 className="extendedDaily__box--title">{getDay(daily.daily, dayNumber)}</h1>
            {/*container which contains information about specific day*/}
            <div className="row">

                {/*general information like temperature (form state) and weather icon(getIcon function)*/}
                <div className="extendedDaily__general">
                    <p className="extendedDaily__general--icon">{getIcon(sky)}</p>
                    <h3 className="extendedDaily__general--temperature">{Math.floor(temperature_max)}&#176;/{Math.floor(temperature_min)}&#176;</h3>
                </div>

                {/*information about weather conditions (form state)*/}
                <div className="extendedDaily__conditions">
                    <p><i className="fas fa-tint"/> <strong>{humidity} %</strong></p>
                    <p><i className="fas fa-wind"/><strong>{wind} kph</strong></p>
                    <p><i className="far fa-heart"/><strong>{pressure} hpa</strong></p>
                </div>

            </div>
        </div>
    )
}

