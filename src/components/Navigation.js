

import {connect} from "react-redux";
import {changeSearchBarValue} from "../actions/searchBar_value-actions";
import {useEffect, useState} from "react"; //changing reducer value function
import diskette from "../images/diskette.png"
// simple navigation component with saved list, which sets the reducer by action changeSearchBarValue
const Navigation = ({changeSearchBarValue,  savedPlaces}) => {

    const [flag, setFlag] = useState(true)
 useEffect(()=> {
  localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
 }, [savedPlaces]);


    const handleSubmit = (e) => {
        changeSearchBarValue(e.target.value)
    }

    // changing the navigation display by flag state
    const handleChangeFlag = () => {
        if (flag === true) {
            setFlag(false);
        } else {
            setFlag(true);
        }
    }

    // changing the city by selecting saved place
    const handleChangeCity = (value) => {
        changeSearchBarValue(value);
        setFlag(true);
    }


    return (
        <nav className="container">
            {/*navigation  */}
            {flag && <div className="navigation">
                <div className="navigation__toggleIcon" onClick={handleChangeFlag}>
                     <img src={diskette} alt='diskette ' title='See your saved places'/>
                </div>
                <input onChange={handleSubmit} type="text" className="navigation__searchBar"
                       placeholder="Enter a place name"/>
            </div>}
           {/*saved cities in list*/}

            {flag !== true && <div className="savedCities">
                <i className="far fa-times-circle closeIcon" onClick={handleChangeFlag} title='Close'/>
                <h1 className="savedCities__title">SAVED</h1>
                <ul className="savedCities__list">{
                    // rendering list elements by savedCities state(Local Storage)
                    savedPlaces.map((el, key) => (
                        <li className='savedCities__listItem' key={key + `savedCity`} onClick={() => handleChangeCity(el)}>{el}</li>
                    ))
                }</ul>
            </div>}
        </nav>
    )
}


//changing reducer value function
const mapDispatchToProps = dispatch => ({
    changeSearchBarValue: (text) => dispatch(changeSearchBarValue(text))
});

// array with data about saved places names
const mapStateToProps = state => ({
    savedPlaces: state.savedPlaces,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);