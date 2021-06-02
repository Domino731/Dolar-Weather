import {connect} from "react-redux";
import {changeSearchBarValue} from "../actions/searchBar_value-actions";

const Navigation = ({changeSearchBarValue1}) => {
    let input;
    const handleSubmit = () => {
        const value = input.value.trim();
        changeSearchBarValue1(value)
    }
    return (
        <nav className="container">
            <div className="navigation">

                <div className="navigation__menuIcon">
                    <i className="fas fa-bars"/>
                </div>

                <input type="text" className="navigation__searchBar" ref={node => (input = node)}/>
                <button type="submit" onClick={handleSubmit}><i>ad</i></button>
            </div>
        </nav>
    )
}


const mapDispatchToProps = dispatch => ({
    changeSearchBarValue1: (text) => dispatch(changeSearchBarValue(text))
})
export default connect(null, mapDispatchToProps)(Navigation);