/**
 * check if particular name place has been saved in local storage ('savedPlaces')
 * @param {string} placeName - name of place that you want to check 
 * @returns boolean value
 */
export const checkIsSaved = (placeName) => {
    const localData = localStorage.getItem('savedPlaces');
    if(localData){
        const data = JSON.parse(localData);
        return data.includes(placeName);
    }
    else{
        return false;
    }
}