import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../Components/styles.css';

const HomePage = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  // const handleHeightChange = (e) => setHeight(e.target.value);
  // const handleWeightChange = (e) => setWeight(e.target.value);
  // const handleAgeChange = (e) => setAge(e.target.value);
  // const handleGenderChange = (e) => setGender(e.target.value);
  // const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!height || isNaN(height) || Number(height) <= 0) {
      alert('Please enter a valid height.');
      return;
    }

    if (!weight || isNaN(weight) || Number(weight) <= 0) {
      alert('Please enter a valid weight.');
      return;
    }

    if (!age || isNaN(age) || Number(age) <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    if (!gender) {
      alert('Please select a gender.');
      return;
    }

    if (!file) {
      alert('Please upload a file before submitting.');
      return;
    }

    navigate('/results', {
      state: { name, age, height, weight, file },
    });
  };

  return (
    <div>
      <Header />
      <div className="homepage-container">
        <div className="form-card">
          <h2 className="greeting">
            Hello, <span>User 👋</span>
          </h2>
          <h5 className="subtitle">Enter your details here:</h5>
          <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingHeight"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <label htmlFor="floatingHeight">Height (cm)</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingWeight"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <label htmlFor="floatingWeight">Weight (kg)</label>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingAge"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label htmlFor="floatingAge">Age</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-control"
                    id="genderSelect"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <label htmlFor="genderSelect">Gender</label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="uploadFile" className="form-label">
                Upload Report:
              </label>
              <input
                type="file"
                className="form-control"
                id="uploadFile"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-primary custom-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;