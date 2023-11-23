function BtnContainer({jobs, currentJob,setCurrentJob}){
    
    return(
        <div className="btn-container">
            {jobs.map((item,index) =>{
                return( 
                <button onClick={() => setCurrentJob(index)} className={index === currentJob? "active-btn" : "job-btn"} key={item.id}>{item.company}</button>
                )
            })}
        </div>
    )

}

export default BtnContainer;