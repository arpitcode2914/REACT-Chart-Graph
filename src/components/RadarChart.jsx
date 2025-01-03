import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Radar Chart માટે જરૂરી modules રજિસ્ટર કરો
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
    const data = {
        labels: ["sujal", "arpit", "piyush", "radhika", "mitesh","devendra"],
        datasets: [
          {
            label: "Athlete A",
            data: [65, 59, 90, 81, 56,25],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Athlete B",
            data: [28, 48, 40, 19, 96,36],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };
    
      // Chart options
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
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      };
  return (
   <div className="radar_contaner">
        <div className="radar_data">
            <h2>radar Chart</h2>
                <Radar
                     data={data}
                     options={options}
                />
        </div>
    </div>
  )
}

export default RadarChart