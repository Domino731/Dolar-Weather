import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrent } from "../functions/getWeather";
import { monthsDaysArray } from "../functions/months&daysArray";
import { daysArray } from "../functions/months&daysArray";
import { getIcon } from "../functions/getIcon";
import { setGradient } from "../functions/setGradient";
import { ExtendedForecast } from "./ExtendedForecast";
import { saveCity } from "../functions/saveCity";
import humidity from "../images/humidity.png";
import air from "../images/air.png";
import pressure from "../images/pressure.png";
import rain from "../images/rain.png";
import { changeSavedPlaces } from "../actions/savedPlaces-action";
import { checkIsSaved } from "../functions/checkIsSaved";
//this component rendering the main content on page(weather forecast)
const MainForecast = ({ forecast, saveNewPlace, savedPlaces }) => {

    // the state which contains the weather forecast, getting by getCurrent()
    const [currentForecast, setCurrentForecast] = useState(null);

    const [isSaved, setIsSaved] = useState(checkIsSaved(forecast.location));

    // state with date
    const [date, setDate] = useState(new Date())

    const [backgroundData, setBackgroundData] = useState({ src: '', author: '' });

    //setting and updating weather in state(currentForecast)
    useEffect(() => {
        getCurrent(setCurrentForecast, forecast.location);
    }, [forecast.location])

    useEffect(()=> {
        setIsSaved(checkIsSaved(forecast.location))
    }, [savedPlaces])
    useEffect(() => {
        currentForecast && setBackgroundData(setGradient(currentForecast.weather[0].main));
    }, [currentForecast]);

    //blocking display in pending
    if (currentForecast === null) {
        return null
    }


    //if the city name is incorrect
    else if (currentForecast === undefined) {
        return (
            <>
                <style>{`body {
            background: linear-gradient(#02aab0, #00cdac, #02aab0)} 
            `}</style>
                <main className="container">
                    <div className="forecast_container">
                        <div className="error">
                            <h1>Place not found</h1>
                            <p><i className="far fa-frown-open" /></p>
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
            background-image: url(${backgroundData.src})} 
            `}</style>

            <div className="forecast_container">

                <div className="mainForecast">

                    <div className="save">
                        {/*saving the city in local storage by saveCity()*/}
                        <div 
                        className={`save__btn ${isSaved ? 'save__btn-saved' : 'save__btn-notSaved'}`} 
                        onClick={() => saveNewPlace(currentForecast.name)}
                        title={`save__btn ${isSaved ? 'Save this location' : 'Remove this location from saved'}`}
                        >
                    
                            <i className="fas fa-heart" />
                        </div>
                    </div>


                    {/*city name and current date*/}
                    <h1 className="mainForecast__title" >
                        <i className="fas fa-heart "
                            onClick={() => saveCity(currentForecast.name)} />{currentForecast.name}
                    </h1>
                    <h2 className="mainForecast__date">{daysArray[date.getDay()]}, {monthsDaysArray[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
                    {/*current weather */}
                    <div className="currentWeather">

                        {/*main temperature and icon*/}
                        <div className="currentWeather__temperature">
                            <div>{getIcon(currentForecast.weather[0].main)}</div>
                            <div>{Math.round(currentForecast.main.temp)}&#176;
                            </div>
                            <div>{currentForecast.weather[0].description}</div>
                        </div>

                        {/*min & max temperature and conditions*/}
                        <div className="currentWeather__details">

                            <div className="currentWeather__generalWrapper">
                                <h3 className="currentWeather__temperatureFeel">Feels
                                    like {Math.round(currentForecast.main.feels_like)}&#176; </h3>

                                {/*min & max temperature*/}
                                <div className="currentWeather__detailsMinMax">
                                    <i className="fas fa-long-arrow-alt-up" />
                                    <span>{Math.round(currentForecast.main.temp_max)}&#176;</span>
                                    <i className="fas fa-long-arrow-alt-down" />
                                    <span>{Math.round(currentForecast.main.temp_min)}&#176;</span>
                                </div>
                            </div>

                            {/*weather conditions*/}
                            <div className="currentWeather__detailsConditions">

                                <div className='currentWeather__singleDetail'>
                                    <img src={humidity} alt='Water' title='Humidity' /> <span>Humidity</span>
                                    <strong className='humidityColor'> {currentForecast.main.humidity}%</strong>
                                </div>

                                <div className='currentWeather__singleDetail'>
                                    <img src={air} alt='Wind' title='Wind' /> <span>Wind</span>
                                    <strong className='windColor'> {Math.floor(currentForecast.wind.speed)}kph</strong>
                                </div>

                                <div className='currentWeather__singleDetail'>
                                    <img src={pressure} alt='Pressure' title='Pressure' /><span>Pressure</span>
                                    <strong className='pressureColor'> {currentForecast.main.pressure} hpa</strong>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/*rendering component which is returning daily weather, transmits coords from state (currentForecast)*/}
                    <ExtendedForecast lat={currentForecast.coord.lat} lon={currentForecast.coord.lon} />
                </div>
            </div>
        </main>
    )
}


//getting name of city (random)
const mapStateToProps = state => ({
    forecast: state.searchBar_value,
    savedPlaces: state.savedPlaces,
});
const mapDispatchToProps = dispatch => ({
    saveNewPlace: (name) => dispatch(changeSavedPlaces(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainForecast);