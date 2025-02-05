import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Results = () => {
  const [mealPlan, setMealPlan] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [name] = useState('Nidarshana');
  const [bp] = useState('120/80');
  const [sugar] = useState('200/120');

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
                <div className="label-text">BLOOD PRESSURE</div>
                <div className="value-text">{bp} <span className="unit-text">mmHg</span></div>
              </div>
              <div className="info-item">
                <div className="label-text">BLOOD SUGAR</div>
                <div className="value-text">{sugar} <span className="unit-text">mg/dL</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="plans-section">
          <div className="plans-grid">
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

            <div className="form-card plan-card">
              <h2 className="section-title">
                Workout Routine <span>💪</span>
              </h2>
              <textarea
                className="plan-textarea"
                placeholder="Enter your workout routine here"
                value={workoutPlan}
                onChange={(e) => setWorkoutPlan(e.target.value)}
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