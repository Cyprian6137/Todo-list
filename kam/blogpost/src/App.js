import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Newblog from "./components/newblog";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newblog" component={Newblog} />
      </Switch>
    </Router>
      </div>
      
        
  );
}

export default App;
