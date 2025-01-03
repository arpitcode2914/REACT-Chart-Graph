// line chart 
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  // BarElement,
  Title,
  Tooltip,
  Legend,
  // scales,
  PointElement,
  LineElement,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const LineChart = () => {
  const data = {
    labels: ["Arpit", "Sujal", "Mitesh", "Devendra", "Piyush", "Radhika"],
    datasets: [
      {
        label: "Mongo db",
        data: [70, 1, 5, 81, 75, 63],
        backgroundColor: "rgba(0, 231, 93, 0.96)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Express ",
        data: [50, 65, 23, 33, 46, 34],
        backgroundColor: "rgb(170, 185, 185)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "React",
        data: [75, 80, 45, 44, 23, 45],
        backgroundColor: "rgb(76, 252, 252)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Node Js",
        data: [20, 25 , 55, 67, 67, 76],
        backgroundColor: "rgb(179, 255, 0)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
    // ચાર્ટ માટે ઓપ્શન્સ
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top" ,
        },
        title: {
          display: true,
          text: "Devloper Data",
        },
      },

      scales: {
        y: {
          min: 0, // Y-અક્ષની શરૂઆત
          max: 100, // Y-અક્ષનું અંત
          ticks: {
            stepSize: 10, // દર સ્તપનું અંતર
          },
        },
      },
    };

  return (
    <div className="line_contaner">
        <div className="line_data">
          <h2>Line Chart</h2>
            <Line 
                options={options}
                data={data}
            />
        </div>
    </div>
  )
}

export default LineChart