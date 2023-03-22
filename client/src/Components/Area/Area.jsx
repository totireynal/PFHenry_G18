import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { contentFilters, getAreas, getAreasEmployees, getPositions, getPositionsEmployees } from '../../state/redux/actions/actions';



const Area = () => {
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas);
  const arrContentFilters = useSelector((state) => state.arrContentFilters);



  useEffect(() => {
    dispatch(getAreas(arrContentFilters));
  }, [arrContentFilters, dispatch]);

  const handleChange = (event) => {
    const area = event.target.value;
    // dispatch(getAreasEmployees(area))
    dispatch(contentFilters({ area: area }));
    // dispatch(getAreas());
  };

  return (
    <div className="flex justify-center items-center mr-2">
      <h3>Area: </h3>
      <select
        className="border-2 border-gray-200 ml-2"
        name=""
        onChange={handleChange}
        defaultValue="default"
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
};

export default Area;