import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js modules register કરો
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
     // Chart Data
  const data = {
    labels: ["sujal", "arpit", "piyush", "radhika", "mitesh","devendra"],
    datasets: [
      {
        label: "Vote Count",
        data: [75, 85, 31, 25, 23, 43],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" ,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="polar_contaner">
         <div className="polar_data">
            <h2>polar Chart</h2>
                <PolarArea
                    data={data}
                    options={options}
                />
        </div>
    </div>
  )
}

export default PolarAreaChart