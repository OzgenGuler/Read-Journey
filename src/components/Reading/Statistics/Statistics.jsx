// src/components/Reading/Statistics/Statistics.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Statistics.module.scss";

const Statistics = ({ progress }) => {
  if (!progress || progress.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No statistics available yet</p>
      </div>
    );
  }

  const data = progress.map((item, index) => ({
    name: `Day ${index + 1}`,
    pages: item.pagesCount,
    progress: item.progress,
  }));

  return (
    <div className={styles.statistics}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pages" stroke="#8884d8" />
          <Line type="monotone" dataKey="progress" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
