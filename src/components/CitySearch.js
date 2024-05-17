import { useState, useEffect } from "react";

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 1) Obtains current value of input field 2) Based on value, function filters "allLocations" array 3) Set the "Query" local state to input value 4) Set "suggestions" local state to filtered locations array
  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    }) : [];
    
    setQuery(value);
    setSuggestions(filteredLocations);

    let infoText;
    if (filteredLocations.length === 0) {
      infoText = "We cannot find the city you are looking for. Please try another city."
    } else {
      infoText = ""
    }
    setInfoAlert(infoText);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
    setCurrentCity(value);
    setInfoAlert("");
  };

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return (
              <li 
                key={suggestion}
                onClick={handleItemClicked}>
                {suggestion}
              </li>
            );
          })}
          <li 
            key="See all cities" 
            onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul> : null
      }
    </div>
  );
};

export default CitySearch;
