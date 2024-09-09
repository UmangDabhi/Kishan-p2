import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import { Home } from "./Page/Home";
import { Posters } from "./Page/Poster";
import { Project } from "./Page/Project";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/project" element={<Project />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
