/**
 * get data from local storage ('savedPlaces') about saved places names
 *  */
export const getSavedPlaces = () => {
    const localData = localStorage.getItem('savedPlaces'); 

    // check if local data exist
    if (localData) {
        return JSON.parse(localData);
    }
    else {
        return [];
    }
}