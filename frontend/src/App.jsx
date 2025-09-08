import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import StatusPage from "./pages/StatusPage";
import ResultsPage from "./pages/ResultsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AnimatedBackground from "./AnimatedBackground";

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
