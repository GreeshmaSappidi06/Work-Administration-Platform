import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTasks() {
  const [data, setData] = useState({
    taskname: '',
    assignedTo:'',
    status:'',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data);

    const taskData = {
      taskname: data.taskname,
      assignedTo:data.assignedTo,
      status:data.status || 0,
    };
    axios
      .post('http://localhost:8081/createTask', taskData)
      .then((res) => {
        navigate('/tasks');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Task</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, taskname: e.target.value })}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAssignedTo" className="form-label">
            Assigned To
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAssignedTo"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, assignedTo: e.target.value })}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputStatus" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="inputStatus"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, status: e.target.value })}
          />
        </div>
        

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTasks;
