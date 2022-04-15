import React from "react";
import styles from './App.module.scss'
import clsx from "clsx";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastestProject from "./pages/LastestProject";
function App() {
  return (
    <BrowserRouter>
      <div className={clsx(styles.app)}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/all-projects" element={<LastestProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
