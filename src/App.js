import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, AdManagement } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/ad" element={<AdManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
