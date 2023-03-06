import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
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

