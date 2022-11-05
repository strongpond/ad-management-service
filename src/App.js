import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
