import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const PaidUpPieChart = () => {
  const data = [
    {
      type: "Paid",
      value: 75,
    },
    {
      type: "Unpaid",
      value: 25,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.7,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 18,
      },
    },

    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Total Students\n10500",
      },
    },
  };
  return <Pie {...config} />;
};

export default PaidUpPieChart;
