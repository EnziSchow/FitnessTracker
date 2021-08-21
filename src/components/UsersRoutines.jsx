import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { deleteRoutine } from "../api";

const UsersRoutines = ({ user, routines }) => {
  const destroyRoutine = async (e) => {
    try {
      await deleteRoutine(e.target.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="routine-display">
      <h2>Routines By: {user.username}</h2>
      <Link to="createroutines">
        <button className="submit-btn">Create new routine</button>
      </Link>
      {routines.map(({ id, name, goal, creatorName, activities }) => (
        <div key={id} className="routine-card">
          {user.username === creatorName && (
            <>
              <h3>{name}</h3>
              <h3>{goal}</h3>
              <h4>Activities:</h4>
              {activities.map(({ id, name, description, count, duration }) => (
                <div key={id}>
                  <p>Name: {name}</p>
                  <p>Description: {description}</p>
                  <p>Count: {count}</p>
                  <p>Duration: {duration}</p>
                </div>
              ))}
              <p>Routine Creator: {creatorName}</p>
              <button className="submit-btn">Edit Routine</button>
              <button
                onClick={destroyRoutine}
                type="button"
                id={id}
                className="submit-btn"
              >
                Delete Routine
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UsersRoutines;
