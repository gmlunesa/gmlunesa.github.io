import React, { useContext } from "react";
import GoalCard from "../../components/GoalCard";
import GoalsData from "../../data/GoalsData";

import { GoalContext } from "../../context/GoalContext";
const GoalList = () => {
  const { activities } = useContext(GoalContext);

  const filterPerGoal = (goal) => {
    try {
      const filteredActivities = activities?.filter(
        (activity) => activity.category === goal
      );
      return filteredActivities;
    } catch {
      return [];
    }
  };
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-bold text-3xl text-center">2024 Goals</h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          {/* Two thousand and twenty-three, a year focused on growth and
          productivity. */}
          Two thousand and twenty-four, a year to aim for more.
        </p>

        {GoalsData.map((goal) => (
          <GoalCard
            key={goal.name}
            activities={filterPerGoal(goal.name)}
            {...goal}
          />
        ))}
      </div>
    </section>
  );
};

export default GoalList;
