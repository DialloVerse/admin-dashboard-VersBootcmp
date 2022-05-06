import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import "./chart.css";

export default function Chart() {
    
    const data = [
        {
          name: "Jan",
          "Active User": 4000,
        },
        {
          name: "Feb",
          "Active User": 5000,
        },
        {
          name: "Mar",
          "Active User": 3000,
        },
        {
          name: "Apr",
          "Active User": 4000,
        },
        {
          name: "Jun",
          "Active User": 2000,
        },
        {
          name: "Jul",
          "Active User": 4000,
        },
        {
          name: "Aug",
          "Active User": 3000,
        },
        {
          name: "Sep",
          "Active User": 4000,
        },
        {
          name: "Oct",
          "Active User": 1000,
        },
        {
          name: "Nov",
          "Active User": 4000,
        },
        {
          name: "Dec",
          "Active User": 3000,
        },
       
      ];
  return (
    <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd"/>
              <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
