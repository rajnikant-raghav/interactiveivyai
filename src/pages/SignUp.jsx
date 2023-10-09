import React, { useState } from "react";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setProfile } from "../features/loggedSlice";
const auth = getAuth();
const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const signUpWithEmail = async () => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setProfile(result.user.email));
    } catch (error) {
        console.log(error.message);
    }
  };

  return (
    <>
    <div className="signin_container" style={{height:'100vh'}}>
      <img src={logo} className="logo" alt="" />
      <h1>Create your account</h1>
      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUpWithEmail}>Submit</button>
      <p>
        Already have an account?{" "}
        <span style={{ color: "#0e9272", cursor: "pointer" }}><Link to={"/"} style={{all:'unset'}}> Sign in</Link></span>
      </p>
    </div>
    <p style={{textAlign:'center', fontSize:'13px', color:'#0e9272', paddingBottom:'10px'}}>Terms of use
|
Privacy policy</p>
    </>
  );
};

export default SignUp;
