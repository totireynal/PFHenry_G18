import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { contentFilters } from '../../state/redux/actions/actions';


const Rol = () => {
  const dispatch = useDispatch();
  // const arrContentFilters = useSelector((state) => state.arrContentFilters);

  // useEffect(() => {}, [dispatch]);

  const handleChange = (event) => {
    const role = event.target.value;
    dispatch(contentFilters({ role: role }));
  };

  return (
    <div className="flex">
      <h3 className="flex justify-center items-center mr-2">Rols: </h3>
      <select
        className="border-2 border-gray-200"
        name=""
        onChange={handleChange}
        defaultValue="default"
      >
        <option hidden>Select</option>
        <option>Admin</option>
        <option>User</option>
      </select>
    </div>
  );
};

export default Rol;