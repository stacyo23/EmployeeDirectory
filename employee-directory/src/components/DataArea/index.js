import react, { useState, useEffect} from "react"; 
import API from "../../utils/API"; 
import DataAreaContext from "../../utils/DataAreaContext"
import "./index.css"; 
import Nav from "../Nav"; 
import DataTable from "../DataTable"; 

const DataArea = () => {
    //set initial state
    const [developerState, setDeveloperState] = useState({
        employees: [],
        order: "ascend",
        filteredEmployees: [],
        headings: [
          { name: "Image", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", },
          { name: "DOB", width: "10%", }
        ]
      });
    
      //handles sorting/sets new state
      const handleSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else{
            setDeveloperState({
                order:"descend"
            })
        }


        const compareFx = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
            return b[heading]-  a[heading];
        }
    }
    }
        const sortedEmployees = developerState.filteredEmployees.sort(compareFx);

        setDeveloperState({
          ...developerState,
          filteredEmployees: sortedEmployees
        });

 };

 //handles search input
 const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = developerState.employees.filter(item => 
    {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setDeveloperState({ 
        ...developerState, 
        filteredEmployees: filteredList });
      };

//activates ajax call to random employee API
      useEffect(() => {
        API.getEmployees()
        .then(results => {
          setDeveloperState({
            ...developerState,
            employees: results.data.results,
            filteredEmployees: results.data.results
          });
        });
      }, []);  

      //checks to see the length of the filtered employees array and if there are values, the datatable is rendered
    return ( 
        <DataAreaContext.Provider
          value={{ developerState, handleSearchChange, handleSort }}
        >
          <Nav />
          <div className="data-area">
            {developerState.filteredEmployees.length > 0 
    ? <DataTable />
     : <div></div>
     }
          </div>
        </DataAreaContext.Provider>
     );
}
 
export default DataArea;
