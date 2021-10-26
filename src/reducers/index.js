// file which is contains all of reducers
import {combineReducers} from "redux";
import {searchBar_value} from "./searchBar_value"; // reducer with city name
import { savedPlaces } from "./savedPlaces";
export default combineReducers({
    searchBar_value,
    savedPlaces
})