import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ManageTask() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8081/getTasks')
      .then((res) => {
        if (res.data.Status === 'Success') {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          alert('Error');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:8081/deleteTask/' + id)
      .then((res) => {
        if (res.data.Status === 'Success') {
          window.location.reload(true);
        } else {
          alert('Error');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center mt-2">
        <h3>Task List</h3>
      </div>
      <Link to="/createTask" className="btn btn-success">
        Add Task
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskname}</td>
                  <td>{task.assigned_to}</td>
                  <td>
                    {' '}
                    { Number(task.status) === -1
                      ? '🕒'
                      : Number(task.status) === 0
                      ? '⏳'
                      : '✅'}
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(task.id)}
                      className="btn btn-sm btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageTask;
