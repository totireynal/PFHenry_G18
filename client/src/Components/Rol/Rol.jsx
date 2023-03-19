import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRoles, getRolEmployees } from '../../state/redux/actions/actions';



const Rol = () =>{
    const dispatch = useDispatch();


    useEffect(()=> {
        
        
    }, [dispatch])

    const handleChange = (event) => {
        const role = event.target.value;
        dispatch(getRolEmployees(role))
    }

    return (
        <div>
            <legend>Rols</legend>
            <select name="" onChange={handleChange} defaultValue="default">
            <option hidden>Elegir</option>
            <option>Admin</option>
            <option>User</option>
            </select>
        </div>
    )
}

export default Rol;