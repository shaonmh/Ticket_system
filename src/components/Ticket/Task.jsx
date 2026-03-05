import React from "react";

const Task = ({ td, handleCompleteTask }) => {
  return (
    <div>
      <div className="card mt-5 shadow-sm bg-base-100">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-lg">{td.title} </h2>
          </div>
          <div
            onClick={() => handleCompleteTask(td.id)}
            className="btn btn-block bg-green-600 text-white"
          >
            Complete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
