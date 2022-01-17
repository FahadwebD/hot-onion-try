
import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Details/Details';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Signin/Register';
import Category from './Pages/Home/Category/Category';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import OrderComplete from './Pages/OrderComplete/OrderComplete/OrderComplete';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        
        </Route>
        <Route  path='/home'>
        <Home></Home>
        
        </Route>
        <Route  path='/category'>
       
        <Category></Category>
        
        </Route>

        <Route exact path='/details/:mealsId'>
          <Details></Details>
        </Route>
        <PrivateRoute exact path='/purchase'>
          <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute exact path='/order'>
          <OrderComplete></OrderComplete>
          </PrivateRoute>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/register'>
          <Register></Register>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
