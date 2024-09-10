import React from "react";

const Update = ({ display }) => {
  return (
    <div className="todo-update">
      <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
        <h3>Update Your Task</h3>
        <input
          type="text"
          className="todo-inputs my-4 w-100 p-3"
          placeholder="Update title"
        />
        <textarea
          className="todo-inputs w-100 p-3"
          placeholder="Update description"
        />
        <div className="d-flex justify-content-end w-100">
          <button className="btn btn-dark my-4">UPDATE</button>
          <button
            className="btn btn-danger mx-3 my-4"
            onClick={() => display("none")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;