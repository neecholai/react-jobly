import React, { useState, useEffect } from 'react';
import SearchBar from '../helpers/SearchBar';
import JoblyApi from '../helpers/JoblyApi';
import Job from './Job';

const JobList = () => {

  const [jobs, setJobs] = useState([]);

  useEffect( () => {
    const getJobs = async () => {
      const jobsResp = await JoblyApi.getJobs();
      setJobs(jobsResp)
    }
    getJobs();
  }, []);

  return (
    <div className="col-md-8 offset-md-2">
      <SearchBar onSubmit={"TODO"} />
      <div>
        {
          jobs.map(job => <Job key={job.id} job={job} />)
        }
      </div>
    </div>
  );
}

export default JobList;