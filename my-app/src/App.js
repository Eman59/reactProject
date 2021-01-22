import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Task from "./components/Task";
import User from "./components/User";
import Protected from './components/Protected'
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Router>
       
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/user"
        render={props=>(
      <User {...props} />
        )}
        >
        </Route>
        {/*  */}
        <Protected exact path="/" component={Home} />
        <Protected exact path="/task" component={Task} />
      </Router>
    </div>
  );
}

export default App;
