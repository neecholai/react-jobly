import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import companyImg from "../assets/default-company-img.png"
import "./CompanyCard.css"

const CompanyCard = ({ company }) => {

  return (
    <Link className="CompanyCard" to={`/companies/${company.handle}`}>
      <Card className="mb-3">
        <Card.Body>
          <div className="col-10" style={{ display: "inline-block" }}>
            <h3 >{company.name}</h3>
            <p >{company.description}</p>
          </div>
          <img style={{ width: "60px" }} src={companyImg} alt={company.name} />
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CompanyCard;