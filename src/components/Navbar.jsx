import { Button, Image, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import img from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        alert("An error happened.: " + error);
      });
  };
  useEffect(() => {
    const auth = getAuth();
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
    <Stack
      boxShadow={"rgba(33, 35, 38, 0.1) 0px 10px 10px -7px;"}
      padding={"10px 30px 10px 30px"}
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image width={"150px"} height={"35px"} src={img} />
      <Stack>
        <Button
          cursor={"pointer"}
          backgroundColor={"#1E90FF"}
          borderRadius={"5px"}
          color={"#fff"}
          border={"none"}
          padding={"10px 15px 10px 15px"}
          variant="outline"
          onClick={logout}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
