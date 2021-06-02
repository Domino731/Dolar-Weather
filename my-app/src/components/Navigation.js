import {connect} from "react-redux";
import {changeSearchBarValue} from "../actions/searchBar_value-actions";
import {useState} from "react";

const Navigation = ({changeSearchBarValue1}) => {
    let input;
    const handleSubmit = () => {
        const value = input.value.trim();
        changeSearchBarValue1(value)
    }
    return (
        <nav className="container">
            <div className="navigation">

                 <input onChange={handleSubmit} type="text" className="navigation__searchBar"
                                          ref={node => (input = node)} placeholder="City"/>
            </div>
        </nav>
    )
}


const mapDispatchToProps = dispatch => ({
    changeSearchBarValue1: (text) => dispatch(changeSearchBarValue(text))
})
export default connect(null, mapDispatchToProps)(Navigation);