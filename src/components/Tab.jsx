import React, { useState } from "react";
import "../styles/Tab.css";

const Tab = () => {
  const [selectedPlan, setSelectedPlan] = useState("Generic");

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <div className="container">
      <div className="switches-container">
        <input
          type="radio"
          id="switchMonthly"
          name="switchPlan"
          value="Generic"
          checked={selectedPlan === "Generic"}
          onChange={handlePlanChange}
        />
        <input
          type="radio"
          id="switchYearly"
          name="switchPlan"
          value="URL"
          checked={selectedPlan === "URL"}
          onChange={handlePlanChange}
        />
        <label htmlFor="switchMonthly">Generic</label>
        <label htmlFor="switchYearly">URL</label>
        <div className="switch-wrapper">
          <div className="switch">
            <div>Generic</div>
            <div>URL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
