import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Productdetails from "./components/Productdetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/product/:id" element={<Productdetails />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
