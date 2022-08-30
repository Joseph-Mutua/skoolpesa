import React from "react";
import { Mix } from "@ant-design/plots";
import { each } from "@antv/util";

const FeeChart = () => {
  const datas = [
    [
      {
        company: "Jan",
        type: "",
        value: 30,
      },
      {
        company: "Feb",
        type: "",
        value: 35,
      },
      {
        company: "March",
        type: "",
        value: 28,
      },

      {
        company: "April",
        type: "",
        value: 28,
      },

      {
        company: "May",
        type: "non-technical jobs",
        value: 40,
      },
      {
        company: "June",
        type: "non-technical jobs",
        value: 65,
      },
      {
        company: "July",
        type: "non-technical jobs",
        value: 47,
      },

      {
        company: "August",
        type: "technical post",
        value: 35,
      },
      {
        company: "Septemebr",
        type: "technical post",
        value: 30,
      },
      {
        company: "October",
        type: "technical post",
        value: 25,
      },

      {
        company: "November",
        type: "technical post",
        value: 25,
      },
      {
        company: "December",
        type: "technical post",
        value: 25,
      },
    ],
  ];
  const plots = [];
  const total = datas.length;
  each(datas, (data, idx) => {
    const startX = idx / total;
    plots.push({
      type: "column",
      region: {
        start: {
          x: startX,
          y: 0,
        },
        end: {
          x: (idx + 1) / total,
          y: 1,
        },
      },
      options: {
        data,
        xField: "company",
        yField: "value",
        seriesField: "company",
        isGroup: true,
        meta: {
          value: {
            sync: true,
          },
        },
        xAxis: {
          label: {
            autoRotate: true,
          },
        },
        yAxis:
          idx === 0
            ? {
                tickCount: 10,
              }
            : {
                label: {
                  formatter: (v) => "",
                },
                tickCount: 10,
              },
        tooltip: {
          showMarkers: true,
          fields: ["SalesTerritoryRegion", "SalesAmount", "quarter"],
        },
        // fixme 设置 yAxis label false 会导致
        // yAxis: idx === 0 ? {} : { label: false },
        minColumnWidth: 24,
        appendPadding: [20, 0],
        annotations: [
          {
            type: "text",
            content: data[0].type,
            position: ["50%", "0%"],
            offsetY: -15,
            style: {
              textAlign: "center",
            },
          },
        ],
      },
    });
  });
  const config = {
    plots,
    syncViewPadding: true,
    tooltip: true,
    legend: {},
  };
  return <Mix {...config} />;
};

export default FeeChart;
