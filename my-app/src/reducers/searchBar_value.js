export const searchBar_value = (state = [], action) => {
    console.log(action)
    switch (action.type) {

        case "CHANGE_CITY":
            return {location: action.location};

        default:
            return state;
    }
}
