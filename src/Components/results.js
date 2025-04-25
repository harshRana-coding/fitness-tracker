import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Results = () => {
  const location = useLocation();
  const { name, height, weight, age } = location.state || {};
  
  const [needs, setNeeds] = useState('');
  const [mealPlan, setMealPlan] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');

  return ( 
    <div>
      <Header />
      <div className="main-container">
        {/* Info Card */}
        <div className="info-section">
          <div className="form-card info-card">
            <h2 className="section-title">
              Your Information <span>📊</span>
            </h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="label-text">NAME</div>
                <div className="value-text">{name}</div>
              </div>
              <div className="info-item">
                <div className="label-text">HEIGHT</div>
                <div className="value-text">{height} <span className="unit-text">cms</span></div>
              </div>
              <div className="info-item">
                <div className="label-text">WEIGHT</div>
                <div className="value-text">{weight} <span className="unit-text">kg</span></div>
              </div>
              <div className="info-item">
                <div className="label-text">AGE</div>
                <div className="value-text">{age} <span className="unit-text">yrs</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="plans-section">
          <div className="plans-grid">
          <div className="form-card plan-card">
            <h2 className="section-title">
              Needs <span>📝</span>
            </h2>
            <textarea
              className="plan-textarea"
              placeholder="Mention your specific health needs or preferences"
              value={needs}
              onChange={(e) => setNeeds(e.target.value)}
            ></textarea>
            </div>

            <div className="form-card plan-card">
              <h2 className="section-title">
                Workout Plan <span>💪</span>
              </h2>
              <textarea
                className="plan-textarea"
                placeholder="Enter your workout routine here"
                value={workoutPlan}
                onChange={(e) => setWorkoutPlan(e.target.value)}
              ></textarea>
            </div>

            <div className="form-card plan-card">
              <h2 className="section-title">
                Meal Plan <span>🍽️</span>
              </h2>
              <textarea
                className="plan-textarea"
                placeholder="Enter your meal plan here"
                value={mealPlan}
                onChange={(e) => setMealPlan(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;