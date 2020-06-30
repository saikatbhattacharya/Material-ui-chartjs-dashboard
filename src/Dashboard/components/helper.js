const random_rgba = (alpha = 1) => {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return `rgba(${r},${g},${b}, ${alpha})`;
};
export const data = (label, data, extraSettings) => {
  const backgroundColor = data.map(() => random_rgba(0.4));
  return {
    datasets: [
      {
        label,
        fill: false,
        lineTension: 0.1,
        backgroundColor,
        borderColor: backgroundColor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data,
      },
    ],
    ...extraSettings,
  };
};
