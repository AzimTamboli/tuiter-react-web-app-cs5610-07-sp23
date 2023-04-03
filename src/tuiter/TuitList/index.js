import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitListItem from "./TuitListItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import '../css/index.css';

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return (
        <ul className="ttr-tuits list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;