import react, {useContext} from "react"; 
import DataAreaContext from "../../utils/DataAreaContext"; 
import "./index.css"; 
 

const DataBody = () => {
const context = useContext(DataAreaContext); 

function formatDOB(date) {
    const dateArray= date.split("-"); 
    const year = dateArray[0]; 
    const month =dateArray[1]; 
    const date =dateArray[2].split("T"); 
    const day=date[0]; 
    const DOB= [day, month, year].join("-"); 
    return DOB; 
}

    return ( 
        <tbody>
            {context.developerState.filteredEmployees[0] !== undefined && context.developerState.filteredEmployees[0].name !== undefined ? (context.developerState.filteredEmployees.map(({ login, name, picture, phone, email, dob}) => {
               return (
                   <tr key={login.uuid}>
                       <td data-th="Image" className="align-middle">
                           <img src={picture.medium} 
                           alt={"profile image for" + name.first + " " + name.last}
                           className="img"
                           />
                       </td>
                       <td data-th="Name" className="complete-name align middle">
                           {name.first} {name.last}
                       </td>
                       <td data-th="Phone" className="p-num align middle">
                           {phone}
                       </td>
                       <td data-th="Email" className="email align-middle">
                           <a href={"mailto:" +email} target="_blank"> 
                           {email}
                           </a>
                       </td>
                        <td data-th="DOB" className="dob align-middle">
                        formatDOB(dob.date)
                        </td>
                   </tr>
               );
            })
            ): (
                <></>
            )} 
           
        </tbody>
        );
}
 
export default DataBody;