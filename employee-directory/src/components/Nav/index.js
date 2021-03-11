import react from "react"; 
import SearchForm from "../SearchForm"
import "./index.css"; 

const Nav = () => {
    return (
        <nav className="navbar navbar-exand-lg navbar-light bg-light">
            <div className="search-form">
                <SearchForm />
            </div>
        </nav>
      );
}
 
export default Nav;
