import React from "react";
import "./index.css";

const SearchForm = () => {
    return ( 
       <form className="searchbox">
           <label htmlFor="Search" >
               <input type="search" value="Search here..." />
           </label>

       </form> 
     );
}
 
export default SearchForm;