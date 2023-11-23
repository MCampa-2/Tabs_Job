import { FaAnglesRight } from "react-icons/fa6";

function Duties({duties}){
    
    return(
        <div>
            {duties.map((duty,index) =>{
                return <div className="job-desc" key={index}>
                    <FaAnglesRight className="job-icon"/>
                    <p>{duty}</p>
                </div>
            })}
        </div>
    )
}

export default Duties;