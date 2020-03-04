import React from 'react';
import SearchBar from '../helpers/SearchBar';

const JobList = () => {
  return (
    <div className="col-md-8 offset-md-2">
      <SearchBar onSubmit={"TODO"} />
      <h3>JobList</h3>
    </div>
  );
}

export default JobList;