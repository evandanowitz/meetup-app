// import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value; // this essentially extracts the value entered by the user into the input field and stores it in the variable "value".
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input 
        type="text" 
        className="number-of-events-input" 
        defaultValue="32"
        onChange={handleInputChanged} 
      />
    </div>
  );
};

export default NumberOfEvents;