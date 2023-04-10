import React from "react";
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
    <Routes >
      <Route exact path="http://panticaleksandar.github.io/portfolio" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="http://panticaleksandar.github.io/portfolio/about" element={<About />} />
        <Route path="http://panticaleksandar.github.io/portfolio/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
