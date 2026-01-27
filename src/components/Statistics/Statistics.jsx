import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Statistics({ stats }) {
  if (!stats || !stats.entries) return null;

  const data = {
    labels: stats.entries.map(e => e.date),
    datasets: [
      {
        label: 'Pages read',
        data: stats.entries.map(e => e.pages),
      },
    ],
  };

  return (
    <div>
      <h3>Statistics</h3>
      <Bar data={data} />
    </div>
  );
}
