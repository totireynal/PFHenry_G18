import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { contentFilters, getAreas, getAreasEmployees, getEmployees, getPositions, getPositionsEmployees } from '../../state/redux/actions/actions';



const Position = ({ selectedOption, handleSelectChange }) => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.positions);
  const arrContentFilters = useSelector((state) => state.arrContentFilters);

  useEffect(() => {
    dispatch(getEmployees(arrContentFilters));
    dispatch(getPositions(arrContentFilters));
  }, [arrContentFilters, dispatch]);

  const handleChange = (event) => {
    const position = event.target.value;
    dispatch(contentFilters({ position: position }));
    handleSelectChange(position)
  };

  return (
    <div className="flex justify-center items-center mr-2">
      <h3>Position: </h3>
      <select
        value={selectedOption}
        className="border-2 border-gray-200 ml-2"
        name=""
        onChange={handleChange}
        defaultValue="default"
      >
        <option value="default" hidden>
          Select
        </option>
        {positions.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Position;