import PostListItem from "./PostListItem";
import posts from "./posts.json";

const PostList = () => {
    return (

        <ul className="list-group">
            {
                posts.map(item => {
                    return(<PostListItem key={item._id} post={item}/>);
                })
            }
        </ul>
    )
}

export default PostList;