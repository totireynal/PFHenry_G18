import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { contentFilters, getAreas, getAreasEmployees, getEmployees, getPositions, getPositionsEmployees } from '../../state/redux/actions/actions';



const Area = ({ selectedOption, handleSelectChange }) => {
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas);
  const arrContentFilters = useSelector((state) => state.arrContentFilters);

  useEffect(() => {
    dispatch(getEmployees(arrContentFilters));
    dispatch(getAreas(arrContentFilters));
  }, [arrContentFilters, dispatch]);

  const handleChange = (event) => {
    const area = event.target.value;
    dispatch(contentFilters({ area: area }));
    handleSelectChange({...selectedOption, area: area});
  };

  return (
    <div className="flex justify-center items-center mr-2">
      <h3>Area: </h3>
      <select
        value={selectedOption.area}
        className="border-2 border-gray-200 ml-2"
        name=""
        onChange={handleChange}
        // defaultValue="default"
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