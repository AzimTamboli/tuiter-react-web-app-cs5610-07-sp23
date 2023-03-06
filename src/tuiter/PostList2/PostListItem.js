import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
const PostListItem = (
    {
        post = {
            "_id": 123,
            "userName": "New York Post",
            "handle": "nypost",
            "time": "24h",
            "avatarIcon": "../../images/nypostavatar.png",
            "title": "Can`t sleep? Try these foods for a good night snooze https://trib.al/ZwVvTN4",
            "image": "/images/nycpost.jpeg",
            "contentTitle": "",
            "content": "",
            "comments": "15K",
            "likes": "5.5K",
            "retuits": "534"
        }
    }

) => {
    return (

        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1">
                    <img className="wd-round-50" width="50px" height="50px" src={post.avatarIcon}/>
                </div>
                <div className="col-11">
                    <div className="ps-1">
                        <div className="row">
                            <div className="col-10 ms-1">
                                <span className="wd-author"><strong>{post.userName}</strong></span>
                                <i className="fa fa-check-circle"></i>
                                <span className="wd-handle wd-gray-text">@{post.handle}</span>
                                <span className="wd-time wd-gray-text">. {post.time}</span>
                            </div>
                            <div className="col-1 ms-4">
                                <i className="fa-solid fa-ellipsis wd-float-left"></i>
                            </div>
                        </div>
                    </div>
                    <div className="ps-1">
                        <span>{post.title}</span>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-1"></div>

                <div className="col-11">

                    <div className=" card bg-black rounded wd-border-color">
                        <img src={post.image} className="card-img-top rounded-top" alt="..."/>

                        <div className="card-body">
                            <span className="card-title wd-white-text" >{post.contentTitle}</span>
                            <p className="card-text wd-topic wd-gray-text">{post.content}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                    <div className="ms-2 row">
                        <div className="p-2 pe-4 wd-float-left col-3">
                            <div className="wd-tabs-link wd-no-underline wd-gray-text"><i
                                className="me-2 bi bi-chat"></i>{post.comments}</div>
                        </div>
                        <div className="p-2 pe-4 wd-float-left col-3">
                            <div className="wd-tabs-link wd-no-underline wd-gray-text"><i
                                className='me-2 fa fa-retweet'></i>{post.retuits}</div>
                        </div>
                        <div className="p-2 pe-4 wd-float-left col-3">
                            <div className="wd-tabs-link wd-no-underline wd-gray-text"><i
                                className="me-2 bi bi-heart"></i>{post.likes}</div>
                        </div>
                        <div className="p-2 pe-4 wd-float-left col-3">
                            <div className="wd-tabs-link wd-no-underline wd-gray-text"><i
                                className="me-2 bi bi-share"></i></div>
                        </div>
                    </div>
                </div>
            </div>


        </li>
    )

};

export default PostListItem;