// simple navigation component with saved list, which sets the reducer by action changeSearchBarValue

import {connect} from "react-redux";
import {changeSearchBarValue} from "../actions/searchBar_value-actions";
import {useEffect, useState} from "react"; //changing reducer value function


const Navigation = ({changeSearchBarValue1}) => {
    const [flag, setFlag] = useState(true)
    const [savedCities, setSavedCities] = useState(JSON.parse(localStorage.getItem("savedCities")))

    //putting saved elements from local storage into savedCities state
    useEffect(() => {
        setSavedCities(JSON.parse(localStorage.getItem("savedCities")))
    }, [])

    // function responsible for getting value from input and setting it into changeSearchBarValue1
    let input;
    const handleSubmit = () => {
        const value = input.value.trim();
        changeSearchBarValue1(value)
    }

    // changing the navigation display by flag state
    const handleChangeFlag = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    // changing the city by selecting saved place
    const handleChangeCity = (value) => {
        changeSearchBarValue1(value)
        setFlag(true)
    }


    return (
        <nav className="container">
            {/*navigation  */}
            {flag && <div className="navigation">
                <i className="far fa-save navigation__menuIcon" onClick={handleChangeFlag}/>
                <input onChange={handleSubmit} type="text" className="navigation__searchBar"
                       ref={node => (input = node)} placeholder="City"/>
            </div>}
           {/*saved cities in list*/}
            {flag !== true && <div className="savedCities">
                <i className="far fa-times-circle closeIcon" onClick={handleChangeFlag}/>
                <h1 className="savedCities__title">SAVED</h1>
                <ul className="savedCities__list">{
                    // rendering list elements by savedCities state(Local Storage)
                    savedCities.map((el, key) => (
                        <li key={key + `savedCity`} onClick={() => handleChangeCity(el)}>{el}</li>
                    ))
                }</ul>
            </div>}
        </nav>
    )
}


//changing reducer value function
const mapDispatchToProps = dispatch => ({
    changeSearchBarValue1: (text) => dispatch(changeSearchBarValue(text))
})
export default connect(null, mapDispatchToProps)(Navigation);