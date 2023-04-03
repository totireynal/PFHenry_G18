import { useMemo } from "react";

import {
    Chart as ChartJS,
    ArcElement,
    Legend,
    Tooltip
   } from "chart.js"
  
  import { Doughnut } from 'react-chartjs-2';
  import {getDoughnu} from "../../state/redux/actions/actions"
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  ChartJS.register(
      ArcElement,
      Legend,
      Tooltip,
  ) 


export default function DoughnuChart(){

    const doughnut = useSelector(state => state.doughnut)

    const currentEmployee = useSelector((state) => state.currentEmployee);
    const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getDoughnu(CompanyId))
      }, [dispatch]
  )
  console.log(doughnut)

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

        const empleadosPorArea = doughnut.reduce((acumulador, empleado) => {
            const {area} = empleado;
            if (!acumulador[area]){
                acumulador[area] = 0;
            } 
            acumulador[area]++;
            return acumulador;
        }, {});
        const resultado = Object.keys(empleadosPorArea).map((area)=>{
            return{area, cantidad: empleadosPorArea[area]};
        })
        console.log(resultado);

        return{
            labels: resultado.map(empleado => empleado.area),
            datasets: [
                {
                    data: resultado.map(empleado => empleado.cantidad),
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


