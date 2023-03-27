import React from "react";
import {Provider, useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import postsArray from "./posts.json";

const PostSummaryList = () => {
    //const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(Item =>
                    <PostSummaryItem key={Item._id} post={Item}/> )
            }

        </ul>
    );
};
export default PostSummaryList;

