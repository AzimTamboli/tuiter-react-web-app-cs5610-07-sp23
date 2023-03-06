import PostListItem from "./PostListItem";
import posts from "./posts.json";
import 'font-awesome/css/font-awesome.min.css';

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