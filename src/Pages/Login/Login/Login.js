import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../images/bannerbackground-removebg.png';
import icon from '../../../images/logo2.png'
import './Login.css'

const Login = () => {
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

  
    <form  >
      <input  type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
      <input type="password" id="login" className="fadeIn third" name="login" placeholder="password"/>
      <input  type="submit" className="fadeIn fourth" id='bt' value="Log In"/>
     
    </form>
    
    {/* <p style={{color:'red'}}>error</p> */}

    <div className='mb-2'>
      <Button className=' fadeIn fourth' id='bt'  >Google</Button>
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