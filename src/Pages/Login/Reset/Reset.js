import { getAuth, sendPasswordResetEmail, sendSignInLinkToEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import bg from '../../../images/bannerbackground-removebg.png';
import icon from '../../../images/logo2.png'


const Reset = () => {

    const [email, setEmail] = useState("");

  const auth = getAuth();
  const handleEmail = (email)=>{
    sendSignInLinkToEmail(auth, email)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
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

    <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => handleEmail(email)}
        >
          Send password reset email
        </button>
    
    {/* <p style={{color:'red'}}>error</p> */}

   
      

    <div id="formFooter">
      <Link style={{textDecoration:'none' , color:'black'}} className="underlineHover" to="/register">Don't Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
      </div>
    );
};

export default Reset;