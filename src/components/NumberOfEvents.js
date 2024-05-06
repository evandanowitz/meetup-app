const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value; // this essentially extracts the value entered by the user into the input field and stores it in the variable "value".
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
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