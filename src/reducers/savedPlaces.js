import { getSavedPlaces } from "../functions/getSavedPlaces";
/**
 REDUX - reducer with array with names of saved places from local storage ('savedPlaces')
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
