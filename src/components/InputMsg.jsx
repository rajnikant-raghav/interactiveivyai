import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInputValue } from "../features/inputSlice";
import { setOutput } from "../features/outputDataSlice";
import img from "../images/processing.gif";

const InputMsg = ({ isLoader }) => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const submitBtn = () => {
    dispatch(setOutput(input));
    dispatch(setInputValue(input));
    setInput("");
  };

  return (
    <div className="input_container">
      <input
        type="text"
        value={input}
        placeholder="Send a message"
        onChange={(e) => setInput(e.target.value)}
      />
      {isLoader ? (
        <img src={img} />
      ) : (
        <button onClick={submitBtn}>
          <i
            className="fa-regular fa-paper-plane"
            style={{
              backgroundColor: "#1E90FF",
              padding: "7px",
              color: "lightgray",
              borderRadius: "5px",
            }}
          ></i>
        </button>
      )}
    </div>
  );
};

export default InputMsg;
