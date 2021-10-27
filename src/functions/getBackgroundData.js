import clear from "../images/clear_sky.jpg";
import haze from "../images/haze.jpg";
import snow from "../images/snow.jpg";
import rain from "../images/rain.jpg";
import thunderstorm from "../images/thunderstorm.jpg";
import clouds from "../images/clouds.jpg";
import mist from "../images/mist.jpg";

/**
 * array with data about backgrounds - source and freepik author attribute
 */
const backgroundsData = [
    {
        src: clouds,
        author:  <a href='https://www.freepik.com/photos/abstract'>Abstract photo created by tawatchai07 - www.freepik.com</a>
    },
    {
        src: clear,
        author: <a href='https://www.freepik.com/photos/background'>Background photo created by tirachard - www.freepik.com</a>
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
        author: <a href='https://www.freepik.com/photos/background'>Background photo created by topntp26 - www.freepik.com</a>
    },
    {
        src: thunderstorm,
        author: <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by macrovector - www.freepik.com</a>
    },
    {
     src: mist,
     author: <a href='https://www.freepik.com/photos/tree'>Tree photo created by wirestock - www.freepik.com</a>
    }
];

export const getBackgroundData = (sky) => {
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
    else if (sky === 'Mist'){
        return backgroundsData[6]
    }
    else {
        return backgroundsData[0]
    }
}
