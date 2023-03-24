import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRoles, getRolEmployees } from '../../state/redux/actions/actions';



const Rol = () =>{
    const dispatch = useDispatch();
    const [area, setArea] = useState("Select")
    const [position, setPosition] = useState("")

    useEffect(()=> {
  

    }, [dispatch])

    const handleChange = (event) => {
        const role = event.target.value;
    
        
        dispatch(getRolEmployees(role))
        
    }

    return (
      <div className="flex">
        <h3 className= "flex justify-center items-center mr-2">Rols: </h3>
        <select
          className="border-2 border-gray-200"
          name=""
          onChange={handleChange}
          defaultValue="default"
          id="roles"
          
        >
          <option hidden>Select</option>
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>
    );
}

export default Rol;