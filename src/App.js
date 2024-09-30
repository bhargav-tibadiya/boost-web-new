import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import Routes from "./Routes";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop />
      {!showContent ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      )}
    </>
  );
};

export default App;
