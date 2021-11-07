import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../functions/getWeather";
import { monthsDaysArray } from "../functions/months&daysArray";
import { daysArray } from "../functions/months&daysArray";
import { getBackgroundData } from "../functions/getBackgroundData";
import { ExtendedForecast } from "./ExtendedForecast";
import humidity from "../images/humidity.png";
import air from "../images/air.png";
import pressure from "../images/pressure.png";
import { changeSavedPlaces } from "../actions/savedPlaces-action";
import { checkIsSaved } from "../functions/checkIsSaved";
import mountains from "../images/mountains.jpg";
import world from "../images/world.png"
import { getDailyWeather } from "../functions/getWeather";

/**
 * this component is responsible for rendering main content with weather forecast
 * @param place (REDUX) - name of particular place, needed to fetch data about weather forecast
 * @param saveNewPlace (REDUX) - redux action that is responsible for saving new place into local storage
 * @savedPlaces (REDUX) - needed for react hook for listening for changes when user add new place (color of heath will change), and it is also need
 * to check if user has already saved this place in local storage
 */
const MainForecast = ({ place, saveNewPlace, savedPlaces }) => {

    /** the state which contains data about the weather forecast */
    const [currentForecast, setCurrentForecast] = useState(null);

    /** state with boolean value which is according to if user has save searched place*/
    const [isSaved, setIsSaved] = useState(checkIsSaved(place.location));

    /** data about background - graphic source and author attribute from freepik */
    const [backgroundData, setBackgroundData] = useState({ src: '', author: '' });

    /** this state contains extended weather forecast - for 7 days */
    const [extendedForecastData, setExtendedForecastData] = useState(null);

    // fetch data about weather by using getCurrentWeather function
    useEffect(() => {
        getCurrentWeather(setCurrentForecast, place.location);
    }, [place.location]);

    // setting the weather state (by getDailyWeather function)
    useEffect(() => {
        (currentForecast !== null && currentForecast !== undefined) && getDailyWeather(setExtendedForecastData, currentForecast.coord.lat, currentForecast.coord.lon);
    }, [currentForecast]);

    // check if user has already save searched place
    useEffect(() => {
        setIsSaved(checkIsSaved(place.location));
    }, [savedPlaces, place.location]);

    // set background data
    useEffect(() => {
        currentForecast && setBackgroundData(getBackgroundData(currentForecast.weather[0].main));
    }, [currentForecast]);

    // blocking display while forecast data is fetching
    if (currentForecast === null || extendedForecastData === null) {
        return null
    }

    // if the place name is incorrect, then getCurrentWeather function will return undefined so it's needed to infrom user about incorrect place name
    else if (currentForecast === undefined) {
        return (
            <>
                <div className="bg" style={{ backgroundImage: `url(${mountains})` }} />

                {/* notify the user */}
                <main className="container">

                    <div className="forecast_container">
                        <div className="error">
                            <h2>Place not found</h2>
                            <img src={world} alt='World' title='Not found' />
                        </div>
                    </div>

                    <div className="freepik__atribbute">
                        <a href="https://www.freepik.com/photos/tree">Tree photo created by wirestock - www.freepik.com</a>
                    </div>

                </main>
            </>
        );
    }


    // content with weather forecast
    return (
        <>

            <div className="bg" style={{ backgroundImage: `url(${backgroundData.src})` }} />

            <main className="container">

                <div className="forecast_container">

                    {/* set background in container with forecast in order to create glass effect */}
                    <div className="mainForecast">

                        <div className=''  />
                        <div className="save">

                            {/* button  (hearth icon) by which user can save searched place into local storage (by saveNewPlace() function, in which is logic responsible for saving this place is placed )*/}
                            {/* when user save new place, he will be displayed in navigation */}
                            <div
                                className={`save__btn ${isSaved ? 'save__btn-saved' : 'save__btn-notSaved'}`}
                                onClick={() => saveNewPlace(currentForecast.name)}
                                title={`save__btn ${isSaved ? 'Save this location' : 'Remove this location from saved'}`}
                            >
                                <i className="fas fa-heart" />
                            </div>
                        </div>


                        {/* place name */}
                        <h1 className="mainForecast__title">{currentForecast.name}</h1>

                        {/* current data */}
                        <h2 className="mainForecast__date">{daysArray[new Date().getDay()]}, {monthsDaysArray[new Date().getMonth()]} {new Date().getDate()}, {new Date().getFullYear()}</h2>

                        {/*current weather */}
                        <div className="currentWeather">

                            {/* temperature and weather icon */}
                            <div className="currentWeather__temperature">
                                <div><img src={`http://openweathermap.org/img/wn/${currentForecast.weather[0].icon}@2x.png`} title={currentForecast.weather[0].main} /></div>
                                <div>{Math.round(currentForecast.main.temp)}&#176;
                                </div>
                                <div>{currentForecast.weather[0].description}</div>
                            </div>

                            {/* min & max temperature and conditions */}
                            <div className="currentWeather__details">

                                <div className="currentWeather__generalWrapper">


                                    <h3 className="currentWeather__temperatureFeel">Feels
                                        like {Math.round(currentForecast.main.feels_like)}&#176; </h3>

                                    {/*min & max temperature*/}
                                    <div className="currentWeather__detailsMinMax">

                                        {/* max */}
                                        <div title='Highest temperature'>
                                            <i className="fas fa-long-arrow-alt-up" />
                                            <span>{Math.round(currentForecast.main.temp_max)}&#176;</span>
                                        </div>

                                        {/* min */}
                                        <div title='Lowest temperature'>
                                            <i className="fas fa-long-arrow-alt-down" />
                                            <span>{Math.round(currentForecast.main.temp_min)}&#176;</span>
                                        </div>

                                    </div>
                                </div>

                                {/*weather conditions*/}
                                <div className="currentWeather__detailsConditions">

                                    {/* Humidity */}
                                    <div className='currentWeather__singleDetail'>
                                        <img src={humidity} alt='Water' title='Humidity' /> <span>Humidity</span>
                                        <strong className='humidityColor'> {currentForecast.main.humidity}%</strong>
                                    </div>

                                    {/* Wind */}
                                    <div className='currentWeather__singleDetail'>
                                        <img src={air} alt='Wind' title='Wind' /> <span>Wind</span>
                                        <strong className='windColor'> {Math.floor(currentForecast.wind.speed)}kph</strong>
                                    </div>

                                    {/* Pressure */}
                                    <div className='currentWeather__singleDetail'>
                                        <img src={pressure} alt='Pressure' title='Pressure' /><span>Pressure</span>
                                        <strong className='pressureColor'> {currentForecast.main.pressure} hpa</strong>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/*rendering component which is returning daily weather, transmits coords from state (currentForecast)*/}
                        <ExtendedForecast extendedForecast={extendedForecastData} />
                    </div>
                </div>

                {/* freepik author attribute */}
                <div className="freepik__atribbute">{backgroundData.author}</div>

            </main>
        </>
    )
}

////////// REDUX /////////////////////

const mapStateToProps = state => ({
    /** value from input with name of searched palce */
    place: state.searchBarValue,
    /** array with saved places in local storage ('savedPlaces') */
    savedPlaces: state.savedPlaces,
});


const mapDispatchToProps = dispatch => ({
    /** saving new place name into local storage ('savedPlaces') */
    saveNewPlace: (name) => dispatch(changeSavedPlaces(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainForecast);