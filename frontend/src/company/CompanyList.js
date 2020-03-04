import React, { useState, useEffect } from 'react';
import SearchBar from '../helpers/SearchBar';
import JoblyApi from '../helpers/JoblyApi';
import Company from './Company';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const companiesResp = await JoblyApi.getCompanies();
      setCompanies(companiesResp);
    }
    getCompanies();
  }, [])

  const searchCompanies = searchTerm => {
    const getCompanies = async searchTerm => {
      const companiesResp = await JoblyApi.getCompanies(searchTerm);
      setCompanies(companiesResp);
    }
    getCompanies(searchTerm);
  }

  return (
    <div className="col-md-8 offset-md-2">
      <SearchBar handleSearch={searchCompanies} />
      <div>
        {companies.map(company => <Company key={company.handle} company={company}/>)}
      </div>
    </div>
  );
}

export default CompanyList;