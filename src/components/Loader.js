import React from "react";
import "../styles/Home.css";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#002452",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
