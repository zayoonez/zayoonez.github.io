import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PromotionMainpage from "./Pages/MainPage/PromotionMainPage";
import AboutMainpage from "./Pages/AboutPage/AboutMainPage";
import { AnimatePresence, motion } from 'framer-motion';
import InsertPage from "./Pages/InsertPage/InsertPage";
import ArtworkMainpage from "./Pages/ArtworkPage/ArtworkMainPage";
import NoticeMainPage from "./Pages/NoticePage/NoticeMainPage";
import ContactPage from './Pages/ContactPage/ContactPage';

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
                        <Route path="/Artwork" element={<ArtworkMainpage />} />
                        <Route path="/notice" element={<NoticeMainPage />} />
                        <Route path="/Contact" element={<ContactPage />} />
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
        </>
    );
}

export default App;
