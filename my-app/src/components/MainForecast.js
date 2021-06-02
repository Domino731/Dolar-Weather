import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrent} from "../functions/getWeather";
import {monthsArray} from "../functions/monthsArray";
import {daysArray} from "../functions/monthsArray";
import {getIcon} from "../functions/getIcon";
import {setGradient} from "../functions/setGradient";
import {ExtendedForecast} from "./ExtendedForecast";
import {saveCity} from "../functions/saveCity";

const MainForecast = ({forecast = `london`}) => {

    const [currentForecast, setCurrentForecast] = useState("");

    const [date] = useState(new Date())
    useEffect(() => {
        getCurrent(setCurrentForecast, forecast.location)
    }, [forecast.location])
    if (currentForecast === "") {
        return null
    } else if (currentForecast === "error") {
        return (
            <main className="container">
                <div className="forecast_container">
                    <div className="error">
                        <h1>Place not found</h1>
                        <p><i className="far fa-frown-open"/></p>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="container">
            <div className="forecast_container" style={{background: setGradient(currentForecast.weather[0].main)}}>
                <div className="mainForecast">


                    <h1 className="mainForecast__title">{currentForecast.name}</h1>
                    <h2 className="mainForecast__date">{daysArray[date.getDay()]}, {monthsArray[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
                    <div className="currentWeather">
                        <div className="currentWeather__temperature">

                            <span>{getIcon(currentForecast.weather[0].main)}</span>
                            <span>{Math.round(currentForecast.main.temp)}<span>&#176;</span>
                            </span>
                            <div>{currentForecast.weather[0].description}</div>
                        </div>
                        <div className="currentWeather__details">
                            <h3 className="currentWeather__details--title">Feels
                                like {Math.round(currentForecast.main.feels_like)}&#176; </h3>
                            <p className="currentWeather__details--minMax">
                                <i className="fas fa-long-arrow-alt-up"/>
                                <span>{Math.round(currentForecast.main.temp_max)}&#176;</span>
                                <i className="fas fa-long-arrow-alt-down"/>
                                <span>{Math.round(currentForecast.main.temp_min)}&#176;</span>
                            </p>
                            <div className="currentWeather__details--conditions">
                                <p><i className="fas fa-tint"/> <span>Humidity</span>
                                    <strong> {currentForecast.main.humidity}  %</strong></p>
                                <p><i className="fas fa-wind"/> <span>Wind</span>
                                    <strong> {Math.floor(currentForecast.wind.speed)}  kph</strong></p>
                                <p><i className="far fa-heart"/><span>Pressure</span>
                                    <strong> {currentForecast.main.pressure}  hpa</strong></p>
                            </div>
                        </div>
                    </div>


                    <ExtendedForecast lat={currentForecast.coord.lat} lon={currentForecast.coord.lon}/>
                    <div className="footer">
                        <button className="footer__saveBtn" onClick={() => saveCity(currentForecast.name)}>
                            <i className="fas fa-heart"/>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}


const mapStateToProps = state => ({
    forecast: state.searchBar_value
})


export default connect(mapStateToProps)(MainForecast);