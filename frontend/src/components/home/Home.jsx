import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center home-title">
          Organize your <br /> Work and Life, finally.
        </h1>
        <p className="home-subtitle">
          Become focused, organized, and calm with <br /> ToDo app. The World's #1 task manager app.
        </p>
        <button className="home-btn p-2">Make ToDo List</button>
      </div>
    </div>
  );
}

export default Home;