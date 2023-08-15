import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from "./Components/Create";


//route for home
function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/create">
                    <Create/>
                </Route>
            </Switch>
        </div>

    </div>
  );
}

export default App;
