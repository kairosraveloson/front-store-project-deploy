import "../styles/globals.css";
import "../styles/dashboard.css";
import "../styles/barre.css";
import "../styles/corps.css";
import "../styles/offline.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import React from "react";
import ReactDOM from "react-dom";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // The bootstrap Javascript must be imported this was
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
