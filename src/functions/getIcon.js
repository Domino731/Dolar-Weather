import cloud from '../images/cloud.png';
import mist from '../images/mist.png';
import rain from '../images/rain.png';
import smog from '../images/haze.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png';
import thunderstorm from '../images/thunderstorm.png';

/**
 * get image which is representing current weather
 * @param {string} sky - current weather 
 */
export const getIcon = (weather) => {
    // console.log(weather)
    // if (weather === "Clouds") {
    //     return <img src={cloud} alt='cloud' title='Cloudy' />
    // }
    // else if (weather === "Haze") {
    //     return <img src={smog} alt='haze' title='Haze' />
    // }
    // else if (weather === "Clear") {
    //     return <img src={sun} alt='sun' title='Sunny' />
    // }
    // else if (weather === "Snow") {
    //     return <img src={snow} alt='snow' title='Snowing' />
    // }
    // else if (weather === "Rain") {
    //     return <img src={rain} alt='rain' title='Raining' />
    // }
    // else if (weather === "Thunderstorm") {
    //     return <img src={thunderstorm} alt='thunderstorm' title='Thunderstorm' />
    // }
    // else if (weather === "Mist") {
    //     return <img src={mist} alt='mist' title='Mist' />
    // }
    // else if (weather === "Extreme"){
    //     return <h1>asd</h1>
    // }
    // else if (weather === "Smoke"){
    //     return <h1>aaa</h1>
    // }
    return <img src={`http://openweathermap.org/img/wn/10d@2x.png`}/>
}