import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signOut,updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";


initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError , setAuthError] = useState('')
    const [admin , setAdmin] = useState(false)
    const auth = getAuth();
    
  const registerUser = (email , password, name, history)=>{
    setIsLoading(true);
      createUserWithEmailAndPassword(auth , email, password)
      .then((userCredential)=>{
        setAuthError('');
        const newUser = {email, displayName:name}
        setUser(newUser)
        // saveUser(email , name)
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace('/')
      })
      .catch((error)=>{
          
          setAuthError(error.message)
      })
      .finally(()=>setIsLoading(false));
  }

  const signInUsingGoogle = () =>{
    
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth , googleProvider)
    
    
}


  const loginUser = (email, password , location , history) =>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination)
     setAuthError('');
    })
    .catch((error) => {
      setAuthError(error.message)
    })
    .finally(()=>setIsLoading(false));;
  
  }


 
   useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
           
        } else {
            setUser({})
        }
        setIsLoading(false);
        
    });
    return () => unsubscribed;
}, [])

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
    // const saveUser = (email, displayName) =>{

    //   const user ={email,displayName}
    //   fetch('https://mysterious-gorge-62564.herokuapp.com/users',{
    //     method:'POST',
    //     headers: {
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(user)
      
    //   })
    //   .then()

    // }

    // useEffect(()=>{
    //   fetch(`https://mysterious-gorge-62564.herokuapp.com/users/${user.email}`)
    //   .then(res=> res.json())
    //   .then(data => setAdmin(data.admin))
    // },[user.email])

  const logout = ()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    })
    .finally(()=> setIsLoading(false));
        
  }

  const [deliveryReport , setDeliveryReport] = useState('Pending');
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        deliveryReport,
        setDeliveryReport,
        signInUsingGoogle ,
        sendPasswordReset
    }
}

export default useFirebase;