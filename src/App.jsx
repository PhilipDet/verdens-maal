import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Headline } from "./components/headline/headline";
import { Home } from "./pages/home/home";

export const App = () => {
    return (
        <>
            <Navbar />
            <Headline />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h2>404 - Page not found!</h2>} />
            </Routes>
            <Footer />
        </>
    );
};
