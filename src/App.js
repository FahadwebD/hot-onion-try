
import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Details/Details';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        
        </Route>
        <Route  path='/home'>
        <Home></Home>
        
        </Route>
        <Route exact path='/details'>
          <Details></Details>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
