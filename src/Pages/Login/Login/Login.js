import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import bg from '../../../images/bannerbackground-removebg.png';
import icon from '../../../images/logo2.png'
import './Login.css'

const Login = () => {

  const [loginData, setLoginData] = useState({});
  const {loginUser , signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || '/home';

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
 
  }
  const handleGoogleSignin = () => {


    signInUsingGoogle()
    .then(result => {
      history.push(redirect_uri);
    })
  }
  const handleLoginSubmit = e => {
     loginUser(loginData.email , loginData.password , location , history)
      e.preventDefault();
  }
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: '100vh',}}>
         <div style={{marginTop:'80px'}}>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src={icon} id="icon" alt="User Icon" />
    </div>

  
    <form type='submit'  onSubmit={handleLoginSubmit}>
      <input name="email" type="text" id="login" className="fadeIn second" placeholder="email"  onChange={handleOnChange}/>
      <input name="password" type="password" className="fadeIn third"  placeholder="password"  onChange={handleOnChange}/>
      <input  type="submit" className="fadeIn fourth" id='bt' value="Log In"/>
     
    </form>
    
    {/* <p style={{color:'red'}}>error</p> */}

    <div className='mb-2'>
      <Button onClick={handleGoogleSignin} className=' fadeIn fourth' id='bt'  >Google</Button>
      </div>
      <div id="formFooter">
          <Link to="/reset">Forgot Password</Link>
        </div>

    <div id="formFooter">
      <Link style={{textDecoration:'none' , color:'black'}} className="underlineHover" to="/register">Don't Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
      </div>
    );
};

export default Login;