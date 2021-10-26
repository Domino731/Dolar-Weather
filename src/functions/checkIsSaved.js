export const checkIsSaved = (placeName) => {
    const localData = localStorage.getItem('savedPlaces');
    if(localData){
        const data = JSON.parse(localData);
        return data.includes(placeName);
    }
    else{
        return false
    }
}