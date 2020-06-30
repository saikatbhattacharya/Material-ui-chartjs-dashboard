import React from "react";
import { Polar } from "react-chartjs-2";
import { data } from "./helper";

const PolarChart = () => {
  return (
    <div>
      <h2>Sales Data</h2>
      <Polar
        data={data("Sales data", [10, 25, 56, 2], {
          labels: ["Red", "Yellow", "Blue", "Green"],
        })}
      />
    </div>
  );
};

export default PolarChart;
