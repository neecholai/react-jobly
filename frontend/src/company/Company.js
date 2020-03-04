import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Job from "../job/Job";
import JoblyApi from "../helpers/JoblyApi";

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState({jobs: [], name: "", description: ""});

  useEffect(() => {
    const getCompany = async () => {
      const companyResp = await JoblyApi.getCompany(handle);
      setCompany(companyResp);
    }
    getCompany();
  }, [handle]);


  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
      <h2>{company.name}</h2>
      <h5>{company.description}</h5>
      <div>
        {
            company.jobs.map(job => <Job key={job.id} job={job} />) 
        }
      </div>
    </div>
  );
}

export default Company;