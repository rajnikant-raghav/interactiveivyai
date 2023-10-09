import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import InputMsg from "./InputMsg";
import Main from "./Main";
import sendMsgToOpenAI from "../openai";
import { useSelector, useDispatch } from "react-redux";
import { setOutput } from "../features/outputDataSlice";

const Dashboard = () => {
  const [isLoader, setIsLoader] = useState(false);
  const inputQuery = useSelector((state) => state.query.value);
  const data = useSelector(state=>state.result.data);
  const dispatch = useDispatch();

  const fetchOpenAI = async () => {
    setIsLoader(true)
    const res = await sendMsgToOpenAI(inputQuery);
    setIsLoader(false)
    dispatch(setOutput(res));
  };
  useEffect(() => {
    if(data.length > 0)
    fetchOpenAI();
  }, [inputQuery]);
  return (
    <div>
      <Navbar />
      <InputMsg isLoader={isLoader} />
      <Main/>
    </div>
  );
};

export default Dashboard;
