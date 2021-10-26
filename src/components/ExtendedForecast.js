import {useEffect, useState} from "react";
import {getOneCall} from "../functions/getWeather"; 
import {getDay} from "../functions/getDay"; 
import {getIcon} from "../functions/getIcon";
import humiditySrc from "../images/humidity.png";
import airSrc from "../images/air.png";
import pressureSrc from "../images/pressure.png"
//this component displays the weather for the next 7 days
//the props which he gets are responsible for getting the specific location (by getOneCall function)
// it's used in MainForecast component
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
        <div className="extendedDaily__container">
            {/*day of the week received by getDay function*/}
            <h1 className="extendedForecast__title">{getDay(daily.daily, dayNumber)}</h1>
            {/*container which contains information about specific day*/}
            <div className="extendedDaily__content">

                {/*general information like temperature (form state) and weather icon(getIcon function)*/}
                <div className="extendedDaily__general">
                    {getIcon(sky)}
                    <div>{Math.floor(temperature_max)}&#176;/{Math.floor(temperature_min)}&#176;</div>
                </div>

                {/*information about weather conditions (form state)*/}
                <div className="extendedDaily__conditions">
                    <div className="extendedDaily__singleCondition humidityColor"> <img src={humiditySrc} alt='Water' title='Humidity' /> <strong>{humidity}%</strong></div>
                    <div className="extendedDaily__singleCondition windColor">  <img src={airSrc} alt='Wind' title='Wind' /> <strong>{wind}kph</strong></div>
                    <div className="extendedDaily__singleCondition pressureColor"><img src={pressureSrc} alt='Pressure' title='Pressure' /><strong>{pressure} hpa</strong></div>
                </div>

            </div>
        </div>
    )
}

