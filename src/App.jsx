import React from "react";
import { Routes, Route } from "react-router-dom";
import Netflix from "./Projects/Netflix";  // Home Page
import Signin from "./Projects/Signin";  // Sign In Page
import Password from "./Projects/Password";
function App() {
  return (
    <Routes> 
      <Route path="/" element={<Netflix />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/password" element={<Password />} />
    </Routes>
  );
}

export default App;
