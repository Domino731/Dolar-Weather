/**
 * REACT REDUX ACTION - change searchBarValue in redux state
 * @param {*} location - new text 
 */
export const changeSearchBarValue = location =>({
    type: "CHANGE_CITY",
    location
})