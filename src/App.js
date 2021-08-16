import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      {/* <Home /> */}
    </Router>
  );
}
