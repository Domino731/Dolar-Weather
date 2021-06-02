export const getIcon = (sky) => {
 if(sky === "Clouds"){
      return <i className="fas fa-cloud"/>
 }
 else if (sky === "Haze"){
     return <i className="fas fa-smog"/>
 }
 else if (sky === "Clear"){
     return <i className="fas fa-sun"/>
 }
 else if (sky === "Snow"){
     return <i className="fas fa-snowflake"/>
 }
 else if (sky === "Rain"){
     return <i className="fas fa-cloud-rain"/>
 }
 else if (sky === "Thunderstorm") {
     return <i className="fas fa-cloud-showers-heavy"/>
 }
 else if (sky === "Mist"){
         return <i className="fas fa-smog"/>
 }
}