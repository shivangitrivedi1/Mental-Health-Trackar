// src/pages/Survey.js
// import React from 'react';

// const Survey = () => {
//   return (
//     <div>
//       <h2>Mental Health Survey</h2>
//       <p>Take this survey to get insights into your mental health status and receive personalized recommendations.</p>
//     </div>
//   );
// };

// export default Survey;

import React, { useState } from 'react';
import '../style/SurveyForm.css';


const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    stressLevel: '',
    sleepHours: '',
    mood: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the form data to localStorage (or send it to the backend)
    const savedResponses = JSON.parse(localStorage.getItem('surveyResponses')) || [];
    savedResponses.push(formData);
    localStorage.setItem('surveyResponses', JSON.stringify(savedResponses));

    alert('Thank you for filling out the survey!');
    setFormData({
      name: '',
      email: '',
      age: '',
      stressLevel: '',
      sleepHours: '',
      mood: '',
      additionalNotes: '',
    });
  };

  return (
    <div className="survey-form-container">
      <h1>Mental Health Tracker Survey</h1>
      <form onSubmit={handleSubmit} className="survey-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          How stressed do you feel on a scale of 1 to 10?
          <input
            type="number"
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </label>
        <label>
          How many hours of sleep do you get on average?
          <input
            type="number"
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          How would you describe your mood today?
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
            <option value="sad">Sad</option>
          </select>
        </label>
        <label>
          Additional Notes:
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any additional comments or concerns?"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
