import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = ({ number, description, assignee, deadline, status, onToggleStatus }) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Task {number}</h5>
        <p className="card-text">
          <strong>Description:</strong> {description}
        </p>
        <p className="card-text">
          <strong>Assignee:</strong> {assignee}
        </p>
        {status === 'Pending' && (
          <p className="card-text">
            <strong>Deadline:</strong> {deadline}
          </p>
        )}
        <p className="card-text">
          <strong>Status:</strong> {status}
        </p>
        <button className="btn btn-primary mt-auto" onClick={onToggleStatus}>
          Change
        </button>
      </div>
    </div>
  );
};

export default Task;