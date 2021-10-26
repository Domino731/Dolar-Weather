import cloud from '../images/cloud.png';
import mist from '../images/mist.png';
import rain from '../images/rain.png';
import smog from '../images/smog.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png';
import thunderstorm from '../images/thunderstorm.png';
/**
 * get image which is representing current weather
 * @param {string} sky - current  
 */
export const getIcon = (weather) => {
 if(weather === "Clouds"){
      return <img src={cloud} alt='cloud' title='Cloud'/>
 }
 else if (weather === "Haze"){
     return <img src={smog} alt='haze' title='Haze'/>
 }
 else if (weather === "Clear"){
     return <img src={sun} alt='sun' title='Sun'/>
 }
 else if (weather === "Snow"){
     return <img src={snow} alt='snow' title='Snow'/>
 }
 else if (weather === "Rain"){
     return <img src={rain} alt='rain' title='Rain'/>
 }
 else if (weather === "Thunderstorm") {
     return <img src={thunderstorm} alt='thunderstorm' title='Thunderstorm'/>
 }
 else if (weather === "Mist"){
         return <img src={mist} alt='mist' title='Mist'/>
 }
}