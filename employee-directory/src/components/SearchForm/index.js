import React from "react";
import "./index.css";

const SearchForm = () => {
    return ( 
       <form className="search">
           <label htmlFor="Search" >
               <input type="text" value="Search here..." />
           </label>

       </form> 
     );
}
 
export default SearchForm;