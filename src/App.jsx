import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./Banner";

import Movies from "./Movies";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}
export default App;
