import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PromotionMainpage from "./Pages/MainPage/PromotionMainPage";
import AboutMainpage from "./Pages/AboutPage/AboutMainPage";
import { AnimatePresence, motion } from "framer-motion";
import InsertPage from "./Pages/InsertPage/InsertPage";
import NoticeMainPage from "./Pages/NoticePage/NoticeMainPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Home from "Pages/Home";
import About from "Pages/About";
import Skills from "Pages/Skills";
import Projects from "Pages/Projects";
import Contact from "Pages/Contact";

function App() {
  const [showInsertPage, setShowInsertPage] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInsertPage(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<PromotionMainpage />} />
            <Route path="/About" element={<AboutMainpage />} />
            <Route path="/notice" element={<NoticeMainPage />} />
            <Route path="/Contact" element={<ContactPage />} />

            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
