import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo2.png";
import google from "../images/google.png";
import microsoft from "../images/microsoft.png";
import github from "../images/github.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  OAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { setProfile } from "../features/loggedSlice";
import { useDispatch } from "react-redux";
const provider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');   
const githubProvider = new GithubAuthProvider(); 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(setProfile(user.displayName));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const signInWithEmail = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setProfile(result.user.email));
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithMicrosoft = async ()=>{
   
    try {
      const result = await signInWithPopup(auth,microsoftProvider);
      dispatch(setProfile(result.user.displayName));
      console.log(result);
    } catch (error) {
      console.log(error.message)
    }
  }

  const signInWithGithub = async ()=>{
   try {
    const result = await signInWithPopup(auth,githubProvider);
    dispatch(setProfile(result.user.displayName));
   } catch (error) {
    console.log(error.message)
   }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    });
  }, []);
  return (
    <>
      <div className="signin_container">
        <img src={logo} className="logo" alt="" />
        <h1>Welcome back</h1>
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
        <button onClick={signInWithEmail}>Submit</button>
        <p>
          Don't have an account?
          <span style={{ color: "#0e9272", cursor: "pointer" }}>
            <Link to={"/signup"} style={{ all: "unset" }}>
              {" "}
              Sign up
            </Link>
          </span>
        </p>
        <span style={{ color: "lightgray" }}>---------OR---------</span>
        <div className="social_media_login">
          <div className="signin_with_google" onClick={signInWithGoogle}>
            <img src={google} alt="" />
            <span style={{ fontSize: "14px" }}>Continue with Google</span>
          </div>
          <div className="signin_with_google" onClick={signInWithMicrosoft}>
            <img src={microsoft} alt="" />
            <span style={{ fontSize: "14px" }}>
              Continue with Microsoft Account
            </span>
          </div>
          <div className="signin_with_google" onClick={signInWithGithub}>
            <img src={github} alt="" />
            <span style={{ fontSize: "14px" }}>
              Continue with Github Account
            </span>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          color: "#0e9272",
          paddingBottom: "10px",
        }}
      >
        Terms of use | Privacy policy
      </p>
    </>
  );
};

export default SignIn;
