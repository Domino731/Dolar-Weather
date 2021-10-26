// this function return the background color which is dependent from weather
// sky - weather conditions
import clear from "../images/clear_sky.jpg";
import haze from "../images/haze.jpg";
import snow from "../images/snow.jpg";
import rain from "../images/rain.png";
import thunderstorm from "../images/thunderstorm.png";
import clouds from "../images/clouds.jpg";

const backgroundsData = [
    {
        src: clouds,
        author: <a href='https://www.freepik.com/photos/travel'>Travel photo created by photoangel - www.freepik.com</a>
    },
    {
        src: clear,
        author: <a href='https://www.freepik.com/photos/star'>Star photo created by lifeforstock - www.freepik.com</a>
    },
    {
        src: haze,
        author: <a href='https://www.freepik.com/photos/city'>City photo created by teksomolika - www.freepik.com</a>
    },
    {
        src: snow,
        author: <a href='https://www.freepik.com/photos/background'>Background photo created by wirestock - www.freepik.com</a>
    },
    {
        src: rain,
        author: <a href='https://www.freepik.com/photos/background'>Background photo created by wirestock - www.freepik.com</a>
    },
    {
        src: thunderstorm,
        author: <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by macrovector - www.freepik.com</a>
    }
];


export const setGradient = (sky) => {
    if (sky === "Clouds") {
        return backgroundsData[0]
    } else if (sky === "Haze") {
        return  backgroundsData[2]
    } else if (sky === "Clear") {
        return  backgroundsData[1]
    } else if (sky === "Snow") {
        return  backgroundsData[3]
    } else if (sky === "Rain") {
        return  backgroundsData[4]
    } else if (sky === "Thunderstorm") {
        return  backgroundsData[5]
    }
}