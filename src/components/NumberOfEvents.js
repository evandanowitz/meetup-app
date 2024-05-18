import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numOfEvents, setNumOfEvents] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value; // extracts value entered by user into input field and stores it in "value" variable.
    setNumOfEvents(value);

    let infoText = "";
    if (value === "") {
      infoText = "";
      setCurrentNOE(value);
    } else if (isNaN(value) || value <= 0) {
      infoText = "Only positive numbers are allowed";
      setCurrentNOE("");
    } else {
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input 
        type="text" 
        className="number-of-events-input"
        value={numOfEvents}
        onChange={handleInputChanged} 
      />
    </div>
  );
};

export default NumberOfEvents;