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
  const [food, setFoodType] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleFoodChange = (e) => setFoodType(e.target.value);

  const handleSubmit = async (e) => {
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
  
    if (!food) {
      alert('Please select a food preference.');
      return;
    }

    const formData = new FormData();
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('foodType', food);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      const response = await fetch('http://localhost:8000/api', {
        method: 'POST',
        headers: {
          'accept': 'application/json'
        },
        body: formData
      });
      const data = await response.json();
      console.log('Success:', data);
      const details = {
        name: name,
        height: height,
        weight: weight,
        age: age
      }
      navigate('/results', {
        state: { details:details, mealPlan : data.meal_plan, workoutPlan: data.workout_plan,needs: data.need },
      });
    } catch (error) {
      console.error('Error:', error);
    }

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
                onChange={handleNameChange}
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
                onChange={handleHeightChange}
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
                onChange={handleWeightChange}
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
                    onChange={handleAgeChange}
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
                    onChange={handleGenderChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <label htmlFor="genderSelect">Gender</label>
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              
            <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-control"
                    id="foodPreferenceSelect"
                    value={food}
                    onChange={handleFoodChange}
                  >
                    <option value="">Select Food Type</option>
                    <option value="Veg">Veg</option>
                    <option value="NonVeg">Non-Veg</option>
                    <option value="Both">Both</option>
                  </select>
                  <label htmlFor="FoodPreference">Food Type</label>
                </div>
              </div>
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