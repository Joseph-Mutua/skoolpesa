import React from "react"

import { Pie } from "@ant-design/plots";

const FeePaidThroughPieChart = () => {
  const data = [
    {
      type: "Skoopesa",
      value: 6500,
    },
    {
      type: "Others",
      value: 3200,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    theme: {
      colors10: ["#295fab", "#72bcd5"],
    },
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default FeePaidThroughPieChart;