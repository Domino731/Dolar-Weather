// this action from redux is responsible for changing the reducer
// using in navigation component (set by value from input)

export const changeSearchBarValue = text =>({
    type: "CHANGE_CITY",
    location: text
})