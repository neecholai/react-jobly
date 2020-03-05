import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import addCommas from '../helpers/addCommas';
import JoblyApi from '../helpers/JoblyApi';

const Job = ({ job }) => {
  const [hasApplied, setHasApplied] = useState(false);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const getJobs = async () => {
      const user = await JoblyApi.getUser(username);
      const jobs = user.jobs;
      const userHasApplied = jobs.some(userJob => userJob.id === job.id);
      setHasApplied(userHasApplied);
    }
    getJobs();
  }, [username, job])


  const handleApply = async evt => {
    evt.preventDefault();
    await JoblyApi.apply(job.id, username);
    setHasApplied(true);
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="col-10 ml-auto" style={{ display: "inline-block", textAlign: "left" }}>
          <h4 >{job.title}</h4>
          <div >Salary: {`$${addCommas(job.salary)}`}</div>
          <div >Equity: {`${job.equity * 100}%`}</div>
        </div>
        {
          hasApplied ?
            <Button variant="danger" disabled>APPLIED</Button> :
            <Button variant="danger" onClick={handleApply}>APPLY</Button>
        }
      </Card.Body>
    </Card>
  );
}

export default Job;