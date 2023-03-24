import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAreas, getAreasEmployees, getPositions, getPositionsEmployees } from '../../state/redux/actions/actions';



const Area = () =>{
    const dispatch = useDispatch();
    const areas = useSelector((state) => state.areas)

    useEffect(()=> {
        dispatch(getAreas());
        
    }, [dispatch])

    const handleChange = (event) => {
        const area = event.target.value;
        dispatch(getAreasEmployees(area))

    }

    return (
      <div className="flex justify-center items-center mr-2">
        <h3>Area: </h3>
        <select
          className="border-2 border-gray-200 ml-2"
          name=""
          onChange={handleChange}
          defaultValue="default"
          id="area"
        >
          <option value="default" hidden>
            Select
          </option>
          {areas.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
}

export default Area;