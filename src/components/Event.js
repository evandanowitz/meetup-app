import { useState } from "react";

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event" key={event.id}>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      { showDetails ? (
        <p className="details">{event.description}</p>
      ) : null }
      <button className="details-btn" 
        onClick={() => {
          showDetails ? setShowDetails(false) : setShowDetails(true);
        }}>{showDetails ? "Hide Deatils" : "Show Details"}
      </button>
    </li>
  );
};

export default Event;