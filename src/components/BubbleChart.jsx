
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js modules register કરો
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
    // Chart Data
  const data = {
    datasets: [
      {
        label: "sujal",
        data: [
          { x: 10, y: 20, r: 15 }, // r: radius
          { x: 15, y: 25, r: 10 },
          { x: 20, y: 10, r: 20 },
          { x: 25, y: 30, r: 25 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "arpit",
        data: [
          { x: 24, y: 23, r: 11 },
          { x: 35, y: 50, r: 23 },
          { x: 45, y: 67, r: 13 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "piyush",
        data: [
          { x: 30, y: 15, r: 10 },
          { x: 35, y: 20, r: 15 },
          { x: 40, y: 25, r: 20 },
        ],
        backgroundColor: "rgba(54, 235, 111, 0.2)",
        borderColor: "rgb(54, 235, 57)",
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "X Axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y Axis",
        },
      },
    },
  };

  return (
    <div className="bubble_contaner">
        <div className="bubble_data">
            <h2>bubble Chart</h2>
                <Bubble
                    data={data}
                    options={options}
                />
        </div>
    </div>
  )
}

export default BubbleChart