import React from "react";

function Search({currentSearch, setCurrentSearch}) {

  function handleSearch(e){
    setCurrentSearch(e.target.value)
  }
 
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={currentSearch}
          onChange={handleSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
