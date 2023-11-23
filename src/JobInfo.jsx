import Duties from "./Duties";

function JobInfo({jobs, currentJob}){
    const {title,duties,company,dates} = jobs[currentJob];
    return(
       <article className="job-info">
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-dates">{dates}</p><br></br>
        <h4>Duties</h4><br></br>
        <Duties duties={duties}/>
       </article>
    )
}

export default JobInfo;