import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


//route for home
function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>

    </div>
  );
}

export default App;
