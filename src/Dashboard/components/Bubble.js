import React from "react";
import { Bubble } from "react-chartjs-2";
import { data } from "./helper";

const options = {
  legend: { display: false },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          color: "rgba(33,163,170,0.2)",
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 100,
          min: 0,
          stepSize: 10,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
          color: "rgba(33,163,170,0.2)",
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 100,
          min: 0,
          stepSize: 20,
        },
      },
    ],
  },
};

const BubbleChart = () => {
  return (
    <div>
      <h2>Sales Data</h2>
      <Bubble
        data={data("Sales data", [
          { x: 10, y: 20, r: 5 },
          { x: 23, y: 10, r: 30 },
          { x: 53, y: 25, r: 10 },
        ])}
        options={options}
      />
    </div>
  );
};

export default BubbleChart;
