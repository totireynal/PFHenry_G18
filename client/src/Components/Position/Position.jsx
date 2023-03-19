import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAreas, getAreasEmployees, getPositions, getPositionsEmployees } from '../../state/redux/actions/actions';



const Position = () =>{
    const dispatch = useDispatch();
    const positions = useSelector((state) => state.positions)

    useEffect(()=> {
        dispatch(getPositions())
        
    }, [dispatch])

    const handleChange = (event) => {
        const position = event.target.value;
        dispatch(getPositionsEmployees(position))

    }

    return (
        <div>
            <legend>Position</legend>
            <select name="" onChange={handleChange} defaultValue="default">
            <option value="default" hidden>Elegir</option>
            {positions.map(e=>(<option value={e}>{e}</option>))}
            </select>
        </div>
    )
}

export default Position;