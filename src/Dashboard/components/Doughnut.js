import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data } from "./helper";

const DoughnutChart = () => {
  return (
    <div>
      <h2>Sales Data</h2>
      <Doughnut
        data={data("Sales data", [10, 25, 56, 2], {
          labels: ["Red", "Yellow", "Blue", "Green"],
        })}
      />
    </div>
  );
};

export default DoughnutChart;
