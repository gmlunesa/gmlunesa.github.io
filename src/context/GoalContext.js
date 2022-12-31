import React, { useState, useEffect, createContext } from "react";

const GoalContext = createContext();

const GoalContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [activitiesLoading, setActivitiesLoading] = useState(false);

  const activitiesUrl = "https://gmlunesa-goals.azurewebsites.net/api/goals";
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setActivitiesLoading(true);
        const response = await fetch(activitiesUrl);
        if (!response.ok) throw new Error("Request unsuccessful.");
        const data = await response.json();
        setActivities(data);
        setActivitiesLoading(false);
      } catch (error) {}
    };
    handleFetchData();
  }, []);
  return (
    <GoalContext.Provider value={{ activities, activitiesLoading }}>
      {children}
    </GoalContext.Provider>
  );
};

export { GoalContext, GoalContextProvider };
