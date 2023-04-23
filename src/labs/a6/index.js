import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";

import TodoList from './todo/todo-list'
import PostSummaryItem from "../../tuiter/post-summary-list";
import '../../tuiter/css/index.css';
function Assignment6() {
    return (
        <div>
            <h1 className={"wd-text-color-black"}>Assignment 6</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <PostSummaryItem/>
        </div>
    );
}
export default Assignment6;