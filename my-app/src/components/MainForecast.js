import {connect} from "react-redux";
import {useEffect} from "react";

const MainForecast = ({city}) => {

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=e105d21fb59c10d6ab6a04386a749917`)
            .then(r => r.text())
            .then(r => console.log(r))
    }, [])


    return (


        <div>
            <h1>{city.location}</h1>
            <button>asdasdasdasdasd</button>
        </div>
    )
}

const mapStateToProps = state => ({
    city: state.searchBar_value
})


export default connect(mapStateToProps)(MainForecast);