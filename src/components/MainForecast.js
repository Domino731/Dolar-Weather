import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrent} from "../functions/getWeather"; // getting current weather
import {monthsDaysArray} from "../functions/months&daysArray"; // getting month
import {daysArray} from "../functions/months&daysArray"; // getting day
import {getIcon} from "../functions/getIcon"; // getting icon
import {setGradient} from "../functions/setGradient"; // setting background by weather forecast
import {ExtendedForecast} from "./ExtendedForecast"; // Component responsible for extended forecast
import {saveCity} from "../functions/saveCity"; // saving city into local storage

//this component rendering the main content on page(weather forecast)
const MainForecast = ({forecast}) => {

    // the state which contains the weather forecast, getting by getCurrent()
    const [currentForecast, setCurrentForecast] = useState("");

    // state with date
    const [date] = useState(new Date())

    //setting and updating weather in state(currentForecast)
    useEffect(() => {
        getCurrent(setCurrentForecast, forecast.location)
    }, [forecast.location])


    //blocking display in pending
    if (currentForecast === "") {
        return null
    }


    //if the city name is incorrect
    else if (currentForecast === "error") {
        return (
            <>
                <style>{`body {
            background: linear-gradient(#02aab0, #00cdac, #02aab0)} 
            `}</style>
                <main className="container">
                    <div className="forecast_container">
                        <div className="error">
                            <h1>Place not found</h1>
                            <p><i className="far fa-frown-open"/></p>
                        </div>
                    </div>
                </main>
            </>
        )
    }


    //if the city name is correct
    return (
        <main className="container">
            {/*body with changed background by setGradient()*/}
            <style>{`body {
            background: ${setGradient(currentForecast.weather[0].main)} 
            `}</style>

            <div className="forecast_container">
            <i className="fas fa-smog"/>
                <div className="mainForecast">

                    {/*city name and current date*/}
                    <h1 className="mainForecast__title" >
                        <i className="fas fa-heart "
                           onClick={() => saveCity(currentForecast.name)}/>{currentForecast.name}
                    </h1>
                    <h2 className="mainForecast__date">{daysArray[date.getDay()]}, {monthsDaysArray[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
                    {/*current weather */}
                    <div className="currentWeather">

                        {/*main temperature and icon*/}
                        <div className="currentWeather__temperature">
                            <span>{getIcon(currentForecast.weather[0].main)}</span>
                            <span>{Math.round(currentForecast.main.temp)}<span>&#176;</span>
                            </span>
                            <div>{currentForecast.weather[0].description}</div>
                        </div>

                        {/*min & max temperature and conditions*/}
                        <div className="currentWeather__details">
                            <h3 className="currentWeather__details--title">Feels
                                like {Math.round(currentForecast.main.feels_like)}&#176; </h3>
                            {/*min & max temperature*/}
                            <p className="currentWeather__details--minMax">
                                <i className="fas fa-long-arrow-alt-up"/>
                                <span>{Math.round(currentForecast.main.temp_max)}&#176;</span>
                                <i className="fas fa-long-arrow-alt-down"/>
                                <span>{Math.round(currentForecast.main.temp_min)}&#176;</span>
                            </p>
                            {/*weather conditions*/}
                            <div className="currentWeather__details--conditions">
                                <p><i className="fas fa-tint"/> <span>Humidity</span>
                                    <strong> {currentForecast.main.humidity} %</strong></p>
                                <p><i className="fas fa-wind"/> <span>Wind</span>
                                    <strong> {Math.floor(currentForecast.wind.speed)} kph</strong></p>
                                <p><i className="far fa-heart"/><span>Pressure</span>
                                    <strong> {currentForecast.main.pressure} hpa</strong></p>
                            </div>
                        </div>
                    </div>

                    {/*rendering component which is returning daily weather, transmits coords from state (currentForecast)*/}
                    <ExtendedForecast lat={currentForecast.coord.lat} lon={currentForecast.coord.lon}/>

                    <div className="footer">
                        {/*saving the city in local storage by saveCity()*/}
                        <button className="footer__saveBtn" onClick={() => saveCity(currentForecast.name)}>
                            <i className="fas fa-heart"/>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}


//getting name of city (random)
const mapStateToProps = state => ({
    forecast: state.searchBar_value
})


export default connect(mapStateToProps)(MainForecast);