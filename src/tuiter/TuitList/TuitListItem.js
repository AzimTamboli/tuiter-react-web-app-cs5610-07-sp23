import {useDispatch} from "react-redux";
import TuitStats from "../TuitStat";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src={tuit.image}/>
                </div>
                <div className="col-10">
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
                <div className="col-1">
                    <i onClick={() => deleteTuitHandler(tuit._id)} className="fas fa-remove fa-2x fa-pull-right"></i>
                </div>
            </div>

            <div className="card mt-4" width="100%">
                <div className="card-body">
                    <p className="card-text wd-topic">{tuit.tuit}</p>
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