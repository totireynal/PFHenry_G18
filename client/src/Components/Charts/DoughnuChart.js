import { useMemo } from "react";
// import {getDataColors} from  "./funciones/helpers";

import {
    Chart as ChartJS,
    ArcElement,
    Legend,
    Tooltip
   } from "chart.js"
  
  import { Doughnut } from 'react-chartjs-2';
  
  ChartJS.register(
      ArcElement,
      Legend,
      Tooltip,
  ) 


export default function DoughnuChart(){

       const options = {

        plugins: {
            legend: {position: "left"}
        },
         parsing: {
           key: "nested.value"
         },
         responsive: false,
       }

       

    const data = useMemo(function(){
        return{
            labels: ["Engineering", "Operations", "Legals", "HHRR"],
            datasets: [
                {
                    data: [5, 10, 3, 2],
                    backgroundColor: getDataColors(20),
                    borderColor: getDataColors(),
              }
            ],
        }  
    },[])

    return <Doughnut data = {data} options={options}/>
}



function  getDataColors(opacity) {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}


