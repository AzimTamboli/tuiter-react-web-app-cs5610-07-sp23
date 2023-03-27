import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";
import '../../../tuiter/css/index.css'
const store = configureStore({
    reducer: {hello, todos}
});


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div className={"wd-text-color-black"}>
                <h2 className={"wd-text-color-black"}>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;