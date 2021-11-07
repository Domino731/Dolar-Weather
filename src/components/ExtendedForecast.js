import { getDay } from "../functions/getDay";
import humiditySrc from "../images/humidity.png";
import airSrc from "../images/air.png";
import pressureSrc from "../images/pressure.png"

/**
 * Component which is displaying weather forecast for the next 7 days
 * @param {number} extendedForecast - data about weather forecast for the next 7 days
 */
export const ExtendedForecast = ({extendedForecast}) => {

    // rendering daily weather by using DailyWeather component
    return <div className="extendedForecast">
        {
            extendedForecast.daily.map((el, key) => {
                return <DailyWeather daily={el} key={key} />
            })
        }
    </div>
}

/**
 * Component which is responsible for weather forecast for single day
 * @param {object} daily - data about weather forecast 
 */
const DailyWeather = ({ daily }) => {

    // data about weather in particular day
    /** sky */
    const sky = daily.weather[0].main;
    /** max temperature of the day */
    const temperature_max = daily.temp.max;
    /** min temperature of the day */
    const temperature_min = daily.temp.min;
    /**wind speed */
    const wind = daily.wind_speed;
    /**humidity */
    const humidity = daily.humidity;
    /** pressure */
    const pressure = daily.pressure;

    return (
        <div className="extendedDaily__container">

            {/*day of the week received by getDay function*/}
            <h1 className="extendedForecast__title">{getDay(daily)}</h1>

            {/*container which contains information about specific day*/}
            <div className="extendedDaily__content">

                {/*general information like temperature (form state) and weather icon(getIcon function)*/}
                <div className="extendedDaily__general">
                    <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} title={daily.weather[0].main}/>
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

