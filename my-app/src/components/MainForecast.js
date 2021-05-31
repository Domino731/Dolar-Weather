import {connect} from "react-redux";
import {useState, useEffect} from "react";

const MainForecast = ({city}) => {
    const [forecast, setForecast] = useState(" ");

    return (
        <h1>{city.location}</h1>
    )
}

const mapStateToProps = state => ({
    city: state.searchBar_value
})


export default connect(mapStateToProps)(MainForecast);