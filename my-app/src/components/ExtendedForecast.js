
import {useEffect, useState} from "react";
import {getOneCall} from "../functions/getWeather";
import {getDay} from "../functions/getDay";
import {getIcon} from "../functions/getIcon";

export const ExtendedForecast = ({lat, lon}) => {
    const [extendedForecast, setExtendedForecast] = useState("")

    useEffect(() => {
        getOneCall(setExtendedForecast, lat, lon)
    }, [lat, lon,])

    if (extendedForecast === "") {
        return null
    }

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


const DailyWeather = ({daily, dayNumber}) => {
    const [sky] = useState(daily.daily[dayNumber].weather[0].main)
    const [temperature_max] = useState(daily.daily[dayNumber].temp.max)
    const [temperature_min] = useState(daily.daily[dayNumber].temp.min)
    const [wind] = useState(daily.daily[dayNumber].wind_speed)
    const [humidity] = useState(daily.daily[dayNumber].humidity)
    const [pressure] = useState(daily.daily[dayNumber].pressure)
    return (
        <div className="extendedDaily__box">
            <h1 className="extendedDaily__box--title">{getDay(daily.daily, dayNumber)}</h1>
            <div className="row">
                <div className="extendedDaily__general">
                    <p className="extendedDaily__general--icon">{getIcon(sky)}</p>
                    <h3 className="extendedDaily__general--temperature">{Math.floor(temperature_max)}&#176;/{Math.floor(temperature_min)}&#176;</h3>
                </div>
                <div className="extendedDaily__conditions">
                    <p><i className="fas fa-tint"/> <strong>{humidity} %</strong></p>
                    <p><i className="fas fa-wind"/><strong>{wind} kph</strong></p>
                    <p><i className="far fa-heart"/><strong>{pressure} hpa</strong></p>
                </div>
            </div>
        </div>
    )
}

