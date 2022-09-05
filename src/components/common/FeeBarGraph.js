import React from "react";

import { Column } from "@ant-design/plots";

const FeeBarGraph = () => {
  const data = [
    {
      date: "Jan 09",
      type: "month 1",
      value: 30,
    },
    {
      date: "Jan 10",
      type: "month 1",
      value: 35,
    },
    {
      date: "Jan 11",
      type: "month 1",
      value: 28,
    },

    {
      date: "Jan 12",
      type: "month 2",
      value: 28,
    },

    {
      date: "Jan 14",
      type: "month 2",
      value: 40,
    },
    {
      date: "Jan 15",
      type: "month 1",
      value: 65,
    },
    {
      date: "Jan 16",
      type: "month 1",
      value: 47,
    },

    {
      date: "Jan 17",
      type: "month 3",
      value: 35,
    },
    {
      date: "Jan 18",
      type: "month 3",
      value: 30,
    },
    {
      date: "Jan 19",
      type: " month 4",
      value: 25,
    },

    {
      date: "Jan 20",
      type: " month 4",
      value: 25,
    },
    {
      date: "Jan 21",
      type: "month 4",
      value: 25,
    },
  ];
  const config = {
    data,
    legend: false,
    xField: "date",
    yField: "value",
    theme: {
      colors10: ["#295fab", "#72bcd5", "#DEE8F7"],
      styleSheet: {
        fontFamily: "IBM Plex Sans",
      
      },
    },
    seriesField: "type",
    minColumnWidth: 20,
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};

export default FeeBarGraph;
