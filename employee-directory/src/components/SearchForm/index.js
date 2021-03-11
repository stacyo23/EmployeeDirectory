import React, {useContext} from "react";
import "./index.css";
import DataAreaContext from "../../utils/DataAreaContext"; 

const SearchForm = () => {
    const context =useContext(DataAreaContext); 

    return ( 
       <form className="searchbox">
           <label htmlFor="Search" >
               <input 
               type="search" 
               value="Search here..."
               onChange={e => context.handleSearchChange(e)} />
               <button type="submit">Submit</button>
           </label>

       </form> 
     );
}
 
export default SearchForm;