import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
    const title = 'Welcome to the blog'

  return (
    <div className="App">
        <Navbar/>

        <div className="content">
            <Home/>
        </div>

    </div>
  );
}

export default App;
