import { grey } from "@mui/material/colors";
import { Chart  as ChartJs,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend} from "chart.js";
import 'chart.js/auto'
import { Bar, Line, Pie } from "react-chartjs-2";
ChartJs.register(BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend)




export const BarGraph = () => {
const data = {
  labels: [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Average',
      data: [123,184,225,176,154],
      backgroundColor: ' aqua',
      borderColor: 'black',
      borderWidth: 1,
    },
    // {
    //   label: '333',
    //   data: [3,3,3],
    //   backgroundColor: ' orange',
    //   borderColor: 'black',
    //   borderWidth: 1,
    // }
  ]
}

const options = {

}


  return (
    <div>
      Sugar over time
    <Line 
    style = {
        {padding: '20px',
        width: '80%',
      backgroundColor:grey[200]}
      

    }
    data={data}
    options={options}
    ></Line>
</div>  )
}


export const PieGraph = () => {
  const data = {
    labels: [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'where does this go',
        data: [3,6,9, 12,],
        backgroundColor: ' aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: '333',
        data: [3,3,3],
        backgroundColor: ' orange',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  }
  
  const options = {
  
  }
  
  
    return (
      <div>
        I wish this shit would work
      <Pie
      style = {
          {padding: '20px',
          width: '80%'}
        
  
      }
      data={data}
      options={options}
      ></Pie>
  </div>  )
  }