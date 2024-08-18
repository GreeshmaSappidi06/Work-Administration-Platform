import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Start.css';

function Start() {
  const navigate = useNavigate();
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Workforce Administration Platform</h1>
            <br></br>
            <div>
              <h5 data-aos="fade-up">
                An efficient platform for assigning work to employees and
                effectively managing their tasks and performance.
              </h5>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <button
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  onClick={(e) => navigate('/employeeLogin')}
                >
                  Login as an Employee
                </button>
              </div>
              <div className="text-center text-lg-start">
                <button
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  onClick={(e) => navigate('/login')}
                >
                  Login as an Admin
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="meeting.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Start;
