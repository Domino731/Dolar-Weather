

import { connect } from "react-redux";
import { changeSearchBarValue } from "../actions/searchBar_value-actions";
import { useEffect, useState } from "react";
import diskette from "../images/diskette.png"

/**
 * Component which is rendering input by which user can search specific place, and with the list with saved places (from local storage - 'saved places')
 * @param {function} changeSearchBarValue - changing reducer - searchBarValue
 * @param {savedPlaces} savedPlaces - array with saved places names from local storage ('saved places')
 */
const Navigation = ({ changeSearchBarValue, savedPlaces }) => {

    /** flag which if changed, will cause toogle list with saved places (if false) */
    const [flag, setFlag] = useState(true);

    /** user can save specific place name in local storage by clicking button in MainForecast component, savedPlaces is array from REDUX */
    useEffect(() => {
        localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
    }, [savedPlaces]);


    /** change searchBarValue reducer in REDUX, this value is passed into MainForecast in order to fetch data about specific place */
    const searchSpecificPlace = (e) => {
        return changeSearchBarValue(e.target.value);
    }

    /** change flag state -> toggling between saved places list and search input */
    const handleChangeFlag = () => flag ? setFlag(false) : setFlag(true)

    /**
     * change current place
     * @param {string} name - name of particular place
     */
    const handleChangeCity = (name) => {
        // change searchBarValue reducer in REDUX, this value is passed into MainForecast in order to fetch data about specific place
        changeSearchBarValue(name);
        return setFlag(true);
    }

    return (

        <nav className="container">

            {/*navigation with search input */}
            {flag && <div className="navigation">

                {/* icon by which user can display list with saved list */}
                <div className="navigation__toggleIcon" onClick={handleChangeFlag}>
                    <img src={diskette} alt='diskette ' title='See your saved places' />
                </div>

                {/* input by which user can search for specific weather forecast  */}
                <input onChange={searchSpecificPlace} type="text" className="navigation__searchBar"
                    placeholder="Enter a place name" />

            </div>}

            {/*saved cities in list*/}
            {flag !== true && <div className="savedCities">
                <i className="far fa-times-circle closeIcon" onClick={handleChangeFlag} title='Close' />
                <h1 className="savedCities__title">SAVED</h1>
                <ul className="savedCities__list">{

                    // rendering list elements by savedCities state (array from local storage - 'savedPlaces')
                    savedPlaces.map((el, key) => (
                        <li className='savedCities__listItem' key={key + `savedCity`} onClick={() => handleChangeCity(el)}>{el}</li>
                    ))
                }</ul>

            </div>}

        </nav>
    )
}


///////// REDUX /////////////////

const mapDispatchToProps = dispatch => ({
    /** changing reducer - searchBarValue  */
    changeSearchBarValue: (text) => dispatch(changeSearchBarValue(text))
});

const mapStateToProps = state => ({
    /** array with data about saved places names */
    savedPlaces: state.savedPlaces
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);