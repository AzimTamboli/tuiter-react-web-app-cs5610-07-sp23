import {useDispatch} from "react-redux";
import TuitStats from "../TuitStat";
import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
import {useState} from "react";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [tuitContent, setTuitContent] = useState(tuit.tuit)

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    const updateTuitHandler = (id) => {
        let newTuit = {...tuit, tuit: tuitContent}
        setEditing(!editing)
        dispatch(updateTuitThunk(newTuit));
    }

    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src={tuit.image}/>
                </div>
                <div className="col-9">
                    <div className="ps-1">
                        <span className="wd-author"><strong>{tuit.userName}</strong></span>
                        <i className="fa fa-check-circle"></i>
                        <span className="wd-handle"> {tuit.handle}</span>
                        <span className="wd-time">  {tuit.time}</span>
                    </div>
                    <div className="ps-1">
                        <span>{tuit.contentTitle}</span>
                    </div>
                </div>
                { !editing &&
                <div className="col-1">
                    <i onClick={() => setEditing(!editing) } className= "fas fa-edit fa-2x fa-pull-right"></i>
                </div>
                }
                { editing &&
                    <div className="col-1">
                        <i onClick={() => updateTuitHandler(tuit._id)} className= "fas fa-save fa-2x fa-pull-right"></i>
                    </div>
                }

                <div className="col-1">
                    <i onClick={() => deleteTuitHandler(tuit._id)} className="fas fa-remove fa-2x fa-pull-right"></i>
                </div>
            </div>

            <div className="card mt-4" width="100%">
                <div className="card-body">
                    { !editing &&
                    <p className="card-text wd-topic">{tuit.tuit}</p>
                    }
                    {
                        editing && <textarea value={tuitContent} className="form-control" onChange={event => setTuitContent(event.target.value)}></textarea>
                    }
                </div>
            </div>

            <div>
                <div className="ms-2">

                    <TuitStats tuit={tuit}/>

                </div>
            </div>
        </li>
    )
}

export default TuitListItem;