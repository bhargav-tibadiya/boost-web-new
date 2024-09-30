import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const FourOhFour = () => {
  const navigate = useNavigate();

  function handleHomeCLick() {
    navigate("/");
  }

  return (
    <>
      <section className="FourOhFour">
        <h1>404</h1>
        <h6>This page is coming soon, hang tight!</h6>
        <button onClick={() => handleHomeCLick()}>Back to Home</button>
      </section>
    </>
  );
};

export default FourOhFour;
