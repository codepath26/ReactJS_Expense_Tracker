import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token : '',
  displayName : '',
  emailVerified : false,
  photoUrl : '',
  userIsLoggedIn : false,
  logginHandler : (token)=>{},
  logoutHandler : ()=>{},
  onUserLogin : ()=>{},
});



export const useAuthContext = ()=>{
  return useContext(AuthContext);
}

const AuthContextProvider = (props)=>{
  const localToken = localStorage.getItem("token");
  const [token ,setToken] = useState(localToken);// this is not reinitialzed so that we don't need worry about that // this is help full i don't idea onthis bro but remember this bro
  const [userIsLoggedIn ,setUserIsLoggedIn] = useState(!!token); 
console.log("this",userIsLoggedIn)
//  const userIsLoggedIn = !!token;

 


  const logginHandler = (token)=>{
    console.log("setting  the tocke" , token)
    setToken(token);
    localStorage.setItem('token' , token);
    // adding the timer to expire the token 


    // this is for the auto logout after the five minetes
    // setTimeout(() => {
    //   console.log("logout handler is called after the 5 mintes")
    //     logoutHandler();
    // }, 5000 * 60);
    
  }
  const logoutHandler = ()=>{
    // userIsLoggedIn 
    setToken(null);
    setUserIsLoggedIn(false);
  }
  const onUserLogin = ()=>{
    console.log("userlogin called")
    setUserIsLoggedIn(true);
  }



  return (
    <AuthContext.Provider value={{token , userIsLoggedIn , logginHandler , logoutHandler , onUserLogin}}>
      {
        props.children
      }
    </AuthContext.Provider>
  )
}
// export default AuthContextProvider;