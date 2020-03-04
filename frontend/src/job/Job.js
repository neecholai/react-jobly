import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import addCommas from '../helpers/addCommas';

const Job = ({ job }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="col-10 ml-auto" style={{ display: "inline-block", textAlign: "left"}}>
          <h4 >{job.title}</h4>
          <div >Salary: {`$${addCommas(job.salary)}`}</div>
          <div >Equity: {`${job.equity*100}%`}</div>
        </div>
        <Button variant="danger">Apply</Button>
      </Card.Body>
    </Card>
  );
}

export default Job;