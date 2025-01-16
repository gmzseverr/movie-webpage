import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Banner from "./Banner";

import Swiperrrr from "./Swiperrrr";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Swiperrrr />
      <Routes></Routes>
    </Router>
  );
}
export default App;
