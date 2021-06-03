import {getRandomCapital} from "../functions/randomCapital"; // function which is returning random capital

//reducer with city name, based on which the weather is searched
export const searchBar_value = (state = {location: getRandomCapital()}, action) => {
    switch (action.type) {
        case "CHANGE_CITY":
            return {location: action.location};

        default:
            return state;
    }
}
