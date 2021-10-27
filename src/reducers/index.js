import {combineReducers} from "redux";
import { searchBarValue } from "./searchBar_value";
import { savedPlaces } from "./savedPlaces";

export default combineReducers({
    searchBarValue,
    savedPlaces
});