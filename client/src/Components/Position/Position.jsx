import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { contentFilters, getAreas, getAreasEmployees, getPositions, getPositionsEmployees } from '../../state/redux/actions/actions';



const Position = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.positions);
  const arrContentFilters = useSelector((state) => state.arrContentFilters);

  useEffect(() => {
    dispatch(getPositions(arrContentFilters));
  }, [arrContentFilters, dispatch]);

  const handleChange = (event) => {
    const position = event.target.value;
    // dispatch(getPositionsEmployees(position));
    dispatch(contentFilters({ position: position }));
    // dispatch(getPositions());
  };

  return (
    <div className="flex justify-center items-center mr-2">
      <h3>Position: </h3>
      <select
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