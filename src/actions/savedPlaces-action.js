/**
 * REACT REDUX ACTION - change array with saved places in redux state
 * @param {*} name - name of the place that you want to save
 */
export const changeSavedPlaces = name => {

    // data saved in local storage
    const localData = localStorage.getItem('savedPlaces');

    // check if data exist
    if (localData) {
        const data = JSON.parse(localData);

        // check if user has already saved this place in local storage, if he has then remove this place from data
        if (data.includes(name)) {
            data.splice(data.indexOf(name), 1);
            return {
                type: "CHANGE_SAVED_PLACES",
                data: [...data]
            }
        }

        // use doesnt saved yet in local storage
        else if (!data.includes(name)) {
            return {
                type: "CHANGE_SAVED_PLACES",
                data: [...data, name]
            }
        }
    }

    else {
        return {
            type: "CHANGE_SAVED_PLACES",
            data: [name]
        }
    }
}