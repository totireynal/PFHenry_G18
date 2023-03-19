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
        <div>
            <legend>Area</legend>
            <select name="" onChange={handleChange} defaultValue="default">
            <option value="default" hidden>Elegir</option>
            {areas.map(e=>(<option value={e}>{e}</option>))}
            </select>
        </div>
    )
}

export default Area;