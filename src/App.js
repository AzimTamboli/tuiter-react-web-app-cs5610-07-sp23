import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import ExploreScreen from "./tuiter/explore"
import HomeScreen from "./tuiter/home"

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}></Route>
                  <Route path="/hello" element={<HelloWorld/>}></Route>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>

              </Routes>
          </div>
      </BrowserRouter>
  );

}

export default App;
