import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EmployeeDetail.css';

function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({});
  const status = 1;
  useEffect(() => {
    axios
      .get('http://localhost:8081/get/' + id)
      .then((res) => {
        console.log(res.data.Result[0]); 
        setEmployee(res.data.Result[0]);
      })
      .catch((err) => console.log(err));
  });
  const handleLogout = () => {
    axios
      .get('http://localhost:8081/logout')
      .then((res) => {
        navigate('/start');
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put('http://localhost:8081/updatestatus/' + id, { status: 1 })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/employee');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <section className="context">
        <h1>Work Administration Platform</h1>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    <img
                      src={`http://localhost:8081/images/` + employee.image}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: '150px', borderRadius: '5px' }}
                    />
                    <h5>{employee.name}</h5>
                    <p>{employee.address}</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{employee.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Salary</h6>
                          <p className="text-muted">{employee.salary}</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Work</h6>
                          <p className="text-muted">{employee.work}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Status</h6>
                          <p className="text-muted">
                            {employee.status === 0 ? '⏳' : '✅'}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-success"
                        >
                          Work Finished
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmployeeDetail;
