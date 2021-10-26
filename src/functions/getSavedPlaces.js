export const getSavedPlaces = () => {
    const localData = localStorage.getItem('savedPlaces'); 
    if(localData){
        return JSON.parse(localData)
    }
    else {
        return [];
    }
}