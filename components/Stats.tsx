import dynamic from "next/dynamic";
import React from "react";
import { Chart } from "react-google-charts";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Stats = () => {
  const optionssalesoverview = {
    chart: {
      title: "Upload Performance",
    },

    colors: ["#fb9678", "#03c9d7"],
    fill: {
      type: "solid",
      opacity: 1,
    },
  };
  const seriessalesoverview = [
    ["Month", "AI", "Math"],
    ["Jan*", 8, 16],
    ["Feb", 5, 9],
    ["March", 4, 3],
    ["April", 7, 10],
    ["May", 9, 10],
    ["June", 7, 2],
    ["July", 2, 1],
    ["Aug", 0, 0],
    ["Sept", 0, 0],
    ["Nov", 17, 19],
    ["Dec", 12, 15],
  ];
  return (
    <div className="bg-white hidden md:flex flex-1    p-10 rounded-3xl shadow-lg">
      {/* <Chart
        options={optionssalesoverview}
        series={seriessalesoverview}
        type="bar"
        height="295px"
      /> */}
      <Chart
        chartType="Bar"
        width="100%"
        height="360px"
        data={seriessalesoverview}
        options={optionssalesoverview}
      />
    </div>
  );
};

export default Stats;
