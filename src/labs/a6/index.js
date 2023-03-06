import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";

import TodoList from './todo/todo-list'
import PostList from "../../tuiter/PostList2";
import PostList2 from "../../tuiter/PostList2";
import ExploreComponent from "../../tuiter/explore";
import PostSummaryItem from "../../tuiter/post-summary-list";
function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <PostSummaryItem/>
        </div>
    );
}
export default Assignment6;