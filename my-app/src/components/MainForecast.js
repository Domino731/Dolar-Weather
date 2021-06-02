import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrent} from "../functions/getWeather";
import {getOneCall} from "../functions/getWeather";
import {monthsArray} from "../functions/monthsArray";
import {daysArray} from "../functions/monthsArray";
import {getIcon} from "../functions/getIcon";
import {getUnixTime} from "../functions/UnixTimestamp";
import {setGradient} from "../functions/setGradient";

const MainForecast = ({forecast = `london`}) => {

    const [currentForecast, setCurrentForecast] = useState("");
    const [preciseForecast, setPreciseForecast] = useState("")
    const [flag, setFlag] = useState(true)
    const [date] = useState(new Date())
    useEffect(() => {
        getCurrent(setCurrentForecast, forecast.location)
        if (currentForecast !== "") {
            getOneCall(setPreciseForecast, currentForecast.coord.lat, currentForecast.coord.lon)
        }
    }, [forecast.location])

    const handleChange = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    if (currentForecast === "") {
        return null
    }

    return (
        <main className="container">
            <div className="forecast_container" style={{background: setGradient(currentForecast.weather[0].main)}}>
                {flag && <div className="mainForecast">

                    <div className="mainForecastTitle">
                        <h1>{currentForecast.name}</h1>
                        <h2>{daysArray[date.getDay()]}, {monthsArray[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
                    </div>

                    <div className="mainForecastWeather">
                        <h1 className="mainForecastWeather__actualTemp">{Math.round(currentForecast.main.temp)}&#8451;</h1>
                        <div className="mainForecastWeather__exact">
                        <span
                            className="mainForecastWeather__exact--icon">{getIcon(currentForecast.weather[0].main)}</span>
                            <div className="mainForecastWeather__exact--description">
                                <div>{currentForecast.weather[0].description}</div>
                                {Math.round(currentForecast.main.temp_min)}&#8451;/{Math.round(currentForecast.main.temp_max)}&#8451;
                            </div>
                            <div className="description__conditions">

                                <div className="description__conditions--condition">
                                    <i className="far fa-sun"><i className="fas fa-long-arrow-alt-up"/></i>
                                    <p>{getUnixTime(currentForecast.sys.sunrise)}</p>
                                </div>


                                <div className="description__conditions--condition">
                                    <i className="fas fa-wind"/>
                                    <p>{currentForecast.wind.speed}m/s</p>
                                </div>

                                <div className="description__conditions--condition">
                                    <i className="far fa-sun"><i className="fas fa-long-arrow-alt-down"/></i>
                                    <p>{getUnixTime(currentForecast.sys.sunset)}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="showDaysButton" onClick={handleChange}></button>

                </div>}
                {flag === false && <div className="mainForecast">

                </div>}
            </div>
        </main>
    )
}


const mapStateToProps = state => ({
    forecast: state.searchBar_value
})


export default connect(mapStateToProps)(MainForecast);