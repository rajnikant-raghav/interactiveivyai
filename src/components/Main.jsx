import React from "react";
import { useSelector } from "react-redux";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Main = () => {
  const data = useSelector((state) => state.result.data);
  const profile = useSelector((state) => state.profile.profileData);

  return (
    <div className="main_container">
      {data.length > 1 ? (
        data.map((val, idx) => (
          <>
            {idx % 2 == 0 ? (
              <div className="question">
                <p>{profile.slice(0, 1).toUpperCase()}</p>
                <span>{val}</span>
              </div>
            ) : (
              <p></p>
            )}
            {idx % 2 != 0 ? (
              <SyntaxHighlighter language="javascript" style={prism}>
                {val}
              </SyntaxHighlighter>
            ) : (
              <p></p>
            )}
          </>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Main;
