import { Chart  as ChartJs,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJs.register(BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend)




export const BarGraph = () => {
const data = {
  labels: [ 'Mon', 'Tues', 'Wed'],
  datasets: [
    {
      label: '369',
      data: [3,6,9],
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
    <Bar 
    style = {
        {padding: '20px',
        width: '80%'}
      

    }
    data={data}
    options={options}
    ></Bar>
</div>  )
}