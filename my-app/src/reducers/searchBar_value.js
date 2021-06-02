export const searchBar_value = (state = {location: "london"}, action) => {
    console.log(action)
    switch (action.type) {

        case "CHANGE_CITY":
            return {location: action.location};

        default:
            return state;
    }
}
