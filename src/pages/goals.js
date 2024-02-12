import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import GoalList from "../sections/Goals/GoalList";

import { GoalContextProvider } from "../context/GoalContext";

const Goals = () => {
  return (
    <GoalContextProvider>
      <Layout>
        <Seo
          title="Goals | Goldy Mariz Lunesa"
          description="2024 goals of Goldy Mariz Lunesa @gmlunesa"
          slug="/goals"
        />

        <GoalList />
      </Layout>
    </GoalContextProvider>
  );
};

export default Goals;
