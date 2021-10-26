export const changeSavedPlaces = name => {
    const localData = localStorage.getItem('savedPlaces');

    if (localData) {
        const data = JSON.parse(localData);

        // check if user has already saved this location in local storage
        if (data.includes(name)) {
            data.splice(data.indexOf(name), 1);
            return {
                type: "CHANGE_SAVED_PLACES",
                data: [...data]
            }
        }

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