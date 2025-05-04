import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Results = () => {
  const location = useLocation();
  const { details, mealPlan, workoutPlan, needs } = location.state || {};

  const [localMealPlan, setMealPlan] = useState('');
  const [localWorkoutPlan, setWorkoutPlan] = useState('');
  const [localNeeds, setNeeds] = useState('');

  useEffect(() => {
    if (workoutPlan && needs) {
      setWorkoutPlan(workoutPlan);
      setNeeds(needs);
    }
    if (mealPlan && typeof mealPlan === 'object') {
      const keys = Object.keys(mealPlan);
      const rowCount = Object.keys(mealPlan.Name || {}).length;
    
      const transformed = [];
    
      for (let i = 0; i < rowCount; i++) {
        // Skip rows where Name is missing or empty
        if (!mealPlan.Name?.[i]) continue;
    
        const row = {};
        let isComplete = true;
    
        keys.forEach((key) => {
          const value = mealPlan[key]?.[i];
          if (value === undefined) {
            isComplete = false;
          }
          row[key] = value;
        });
    
        if (isComplete) {
          transformed.push(row);
        }
      }
      setMealPlan(transformed);
    }
    
  }, [mealPlan, workoutPlan, needs]);

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
                <div className="value-text">{details.name}</div>
              </div>
              <div className="info-item">
                <div className="label-text">HEIGHT</div>
                <div className="value-text">{details.height} <span className="unit-text">cms</span></div>
              </div>
              <div className="info-item">
                <div className="label-text">WEIGHT</div>
                <div className="value-text">{details.weight} <span className="unit-text">kg</span></div>
              </div>
              <div className="info-item">
                <div className="label-text">AGE</div>
                <div className="value-text">{details.age} <span className="unit-text">yrs</span></div>
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
                value={localNeeds}
                readOnly
              ></textarea>
            </div>

            <div className="form-card plan-card">
              <h2 className="section-title">
                Workout Plan <span>💪</span>
              </h2>
              <textarea
                className="plan-textarea"
                placeholder="Enter your workout routine here"
                value={localWorkoutPlan}
                readOnly
              ></textarea>
            </div>

            <div className="form-card plan-card">
              <h2 className="section-title">
                Meal Plan <span>🍽️</span>
              </h2>
              <div className="table-container">
                <table className="meal-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Nutrient</th>
                      <th>Price</th>
                      <th>Veg/Non-Veg</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(localMealPlan) &&
                      localMealPlan.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Name}</td>
                          <td>{item.Nutrient}</td>
                          <td>{item.Price}</td>
                          <td>{item.Veg_Non}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;