import React from "react";
import { Radar } from "react-chartjs-2";
import { data } from "./helper";

const RadarChart = () => {
  return (
    <div>
      <h2>Sales Data</h2>
      <Radar
        data={data("Sales data", [10, 25, 56, 2], {
          labels: ["Red", "Yellow", "Blue", "Green"],
        })}
      />
    </div>
  );
};

export default RadarChart;
