import "../styles/Navbar.css";

const ConnectWallet = () => {
  // useEffect(() => {
  //   const styleMetamaskButton = (button) => {
  //     // Add your desired styles to the button
  //     button.style.backgroundColor = "blue";
  //     button.style.color = "white";
  //     // Add more styles as needed
  //   };

  //   const sliders = document.querySelectorAll(".metamask_button");
  //   sliders.forEach((slider) => {
  //     const root = slider.shadowRoot;
  //     if (root) {
  //       // First shadow DOM
  //       const firstShadow = root.querySelector("#shadow-root");
  //       if (firstShadow) {
  //         // Second shadow DOM
  //         const secondShadow = firstShadow.querySelector("#shadow-root");
  //         if (secondShadow) {
  //           // Third shadow DOM
  //           const thirdShadow = secondShadow.querySelector("#shadow-root");
  //           if (thirdShadow) {
  //             // Update and style button in the third shadow DOM
  //             styleMetamaskButton(thirdShadow);
  //           }
  //         }
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div>
      <div className="sibling"></div>
    </div>
  );
};

export default ConnectWallet;
