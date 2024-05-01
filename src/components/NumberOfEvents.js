import { useState } from "react";

const NumberOfEvents = () => {
  const [numEvents, setNumEvents] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value; // this essentially extracts the value entered by the user into the input field and stores it in the variable "value".
    setNumEvents(value);
  };

  return (
    <div id="number-of-events">
      <input 
        type="text" 
        className="number-of-events-input" 
        value={numEvents} 
        onChange={handleInputChanged} 
      />
    </div>
  );
};

export default NumberOfEvents;