import { getSavedPlaces } from "../functions/getSavedPlaces";

//reducer with city name, based on which the weather is searched
export const savedPlaces = (state = getSavedPlaces(), action) => {
    switch (action.type) {
        case "CHANGE_SAVED_PLACES":
            return action.data.sort();

        default:
            return state.sort();
    }
}
