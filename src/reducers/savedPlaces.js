import { getSavedPlaces } from "../functions/getSavedPlaces";
/**
 reducer with place name, at first it will be random capital name which is set by getRandomCapital() function
 */
export const savedPlaces = (state = getSavedPlaces(), action) => {
    switch (action.type) {
        case "CHANGE_SAVED_PLACES":
            // sort saved places alphabetically
            return action.data.sort();

        default:
            // sort saved places alphabetically
            return state.sort();
    }
}
