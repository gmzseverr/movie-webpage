import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Banner from "./Banner";

import Movies from "./Movies";

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
