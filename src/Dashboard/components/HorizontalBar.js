import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { data } from "./helper";

const HorizontalBarChart = () => {
  return (
    <div>
      <h2>Sales Data</h2>
      <HorizontalBar
        data={data("Sales data", [10, 25, 56, 2], {
          labels: ["Red", "Yellow", "Blue", "Green"],
        })}
      />
    </div>
  );
};

export default HorizontalBarChart;
