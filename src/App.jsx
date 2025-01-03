

import './App.css'
import BarChart from './components/BarChart'
import BubbleChart from './components/BubbleChart'
import DoughnutChart from './components/Doughnut'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import PolarAreaChart from './components/PolarAreaChart'
import RadarChart from './components/RadarChart'

function App() {


  return (
    <>
      <div>
              <h1>hare krishna</h1>
          <div className='user_data_charts'>
              <BarChart/>
              <LineChart/>
              <PieChart/>
              <DoughnutChart/>
              <RadarChart/>
              <PolarAreaChart/>
              <BubbleChart/>
              
          </div>
      </div>
  
    </>
  )
}

export default App
