import {getRandomCapital} from "../functions/randomCapital";

/**
 * reducer with place name, which is passed into MainForecast component in order to fetch data about weather forecast for specific place 
 */
export const searchBar_value = (state = {location: getRandomCapital()}, action) => {
    switch (action.type) {
        case "CHANGE_CITY":
            return {location: action.location};

        default:
            return state;
    }
}
