import React, { useState, useEffect } from 'react';
import SearchBar from '../helpers/SearchBar';
import JoblyApi from '../helpers/JoblyApi';
import Job from './Job';

const JobList = () => {

  const [jobs, setJobs] = useState([]);

  //opportunity to refactor getCompanies() outside of useEffect & searchCompanies
  useEffect( () => {
    const getJobs = async () => {
      const jobsResp = await JoblyApi.getJobs();
      setJobs(jobsResp)
    }
    getJobs();
  }, []);

  const searchJobs = searchTerm => {
    const getJobs = async searchTerm => {
      const jobsResp = await JoblyApi.getJobs(searchTerm);
      setJobs(jobsResp);
    }
    getJobs(searchTerm);
  }

  return (
    <div className="col-md-8 offset-md-2">
      <SearchBar handleSearch={searchJobs} />
      <div>
        {
          jobs.map(job => <Job key={job.id} job={job} />)
        }
      </div>
    </div>
  );
}

export default JobList;