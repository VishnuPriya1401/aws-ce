import React from "react";
import LoginRegister from "./LoginRegister";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
