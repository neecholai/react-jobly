import React from 'react';
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import companyImg from "../assets/default-company-img.png"
import "./CompanyCard.css"

const CompanyCard = ({ company }) => {
  const history = useHistory();
  
  const handleClick = () => {
    history.push(`/companies/${company.handle}`)
  };

  return (
    <Card className="mb-3 CompanyCard" onClick={handleClick}>
      <Card.Body>
        <div className="col-10" style={{ display: "inline-block" }}>
          <h3 >{company.name}</h3>
          <p >{company.description}</p>
        </div>
        <img style={{ width: "60px" }} src={companyImg} alt={company.name}/>
      </Card.Body>
    </Card>
  );
}

export default CompanyCard;