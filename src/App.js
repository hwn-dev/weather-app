import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
