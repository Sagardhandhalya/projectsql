import './tailwind.output.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import AddProfile from './components/AddProfile'
import NavBar from './components/NavBar'
import Home from './components/Home'
function App() {
  return (
    <Router>
    <div className="App text-white ">

        <NavBar />
        
        <Switch>
        <Route path="/" component={Home} exact ></Route>
        <Route path="/add" component={AddProfile} exact ></Route>
       </Switch>
     
     
    </div>
    </Router>
  );
}


export default App;
