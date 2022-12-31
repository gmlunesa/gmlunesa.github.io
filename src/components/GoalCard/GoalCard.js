import React, { useContext } from "react";
import Activity from "./Activity";

import { GoalContext } from "../../context/GoalContext";

const GoalCard = ({ name, description, target, activities }) => {
  const { activitiesLoading } = useContext(GoalContext);

  const getPercentage = () => {
    const percentage = Math.floor((activities.length / target) * 100);
    return percentage;
  };
  return (
    <div className="flex flex-col gap-6 my-6 p-8 rounded-xl bg-gray-50 dark:bg-gray-900 shadow">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-600">
          {`${target} `}
        </span>
        {description}
      </h2>

      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`bg-rose-500 text-xs font-medium text-rose-100 text-center p-0.5 leading-none rounded-full ${
            activitiesLoading && `animate-pulse`
          }`}
          style={{ width: `${getPercentage()}%` }}
        >
          {`${getPercentage()}%`}
        </div>
      </div>

      {activities.map((activity) => (
        <Activity key={activity.id} {...activity} />
      ))}
    </div>
  );
};

export default GoalCard;
