import React from "react";

const Routines = ({ routines }) => {
  return (
    <div className="routine-display">
      <h2 className="routine-title">Routines:</h2>
      {routines.map(({ id, name, goal, creatorName, activities }) => (
        <div key={id} className="routine-card">
          <h3>Routine: {name}</h3>
          <h3>Goal: {goal}</h3>
          <br />
          <h4>Activities:</h4>
          {activities.map(({ id, name, description, count, duration }) => (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Description: {description}</p>
              <p>Count: {count}</p>
              <p>Duration: {duration}</p>
            </div>
          ))}
          <br />
          <h3>Routine Creator: {creatorName}</h3>
        </div>
      ))}
    </div>
  );
};

export default Routines;
