"use client";
import consultarRompimentos from "@/app/lib/common/nmt"
import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    visit: 4900,
    click: 5789,
  },
  {
    name: "Tue",
    visit: 4900,
    click: 5789,
  },
  {
    name: "Wed",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Thu",
    visit: 3000,
    click: 4850,
  },
  {
    name: "Fri",
    visit: 5632,
    click: 7523,
  },
  {
    name: "Sat",
    visit: 3680,
    click: 3500,
  },
  {
    name: "Sun",
    visit: 4900,
    click: 5789,
  },
];

const Chart = () => {
  const data = consultarRompimentos()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "#151c2c", border: "none"}}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
