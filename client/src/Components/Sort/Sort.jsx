import { sortEmployeeName} from '../../state/redux/actions/actions'
import { useDispatch } from "react-redux";



const Sort = () => {
    const AtZ = 'AtZ';
    const ZtA = 'ZtA';

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const typeSort = event.target.value;
        dispatch(sortEmployeeName(typeSort)) 
    }

    return(
        <div>
            <legend>Sort ascendent / descendent</legend>
            <select 
                name=""
                onChange={handleChange}
                defaultValue="default"
            >
                <option value="default" hidden >Elegir</option>
                <option value={AtZ}>Ascendent</option>
                <option value={ZtA}>Descendent</option>
            </select>
        </div>
    )
}

export default Sort;