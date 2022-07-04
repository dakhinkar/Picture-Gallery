import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./Components/NavBarComp/NavBar";
import PhotosComponents from "./Components/NavBarComp/Photos/Photos";
import Login from "./Components/NavBarComp/Login/Login.jsx";
import About from "./Components/NavBarComp/About";
import Contact from "./Components/NavBarComp/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpWithValidation from "./Components/NavBarComp/SignUp/SignUpWithValidation";
import Component404 from "./Components/Errorpage/Component404";
import PhotosEnlarged from "./Components/NavBarComp/Photos/PhotosEnlarged";
const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<PhotosComponents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpWithValidation />} />
          <Route path='/photos/:id' element={<PhotosEnlarged />} />
          <Route path="*" element={<Component404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
