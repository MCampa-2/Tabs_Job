import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import { v4 as uuidv4 } from 'uuid';
import BtnContainer from "./BtnContainer";


const url = 'https://course-api.com/react-tabs-project';

const App = () => {

const [isLoading, setIsLoading] = useState(true);
const [jobs, setJobs] = useState([]);
const [currentJob, setCurrentJob] = useState(0)

const fetchJobs = async () =>{
  const response = await fetch(url);
  const newJobs = await response.json();
  setJobs(newJobs);
  setIsLoading(false);

}

useEffect(()=>{
  fetchJobs();
  console.log(jobs);
},[]);

  return(
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentJob={currentJob} setCurrentJob={setCurrentJob}/>
      {isLoading ? <div className="loading"></div>: <JobInfo jobs={jobs} currentJob={currentJob}/>}
    </section>
  )
};
export default App;
