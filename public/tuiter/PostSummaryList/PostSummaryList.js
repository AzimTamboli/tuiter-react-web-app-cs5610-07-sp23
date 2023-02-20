import posts from "./postSummary.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = (width, height) => {
    return (`
        <div class="list-group">
            ${posts.map(post=> {
                return (PostSummaryItem(post, width, height));
            }).join('')}
        </div>
    `)
}

export default PostSummaryList;