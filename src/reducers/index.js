import {combineReducers} from "redux";
import {searchBar_value} from "./searchBar_value";
import { savedPlaces } from "./savedPlaces";

export default combineReducers({
    searchBar_value,
    savedPlaces
});