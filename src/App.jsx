import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Headline } from "./components/headline/headline";
import { Home } from "./pages/home/home";
import { Education } from "./pages/education/education";
import { OwnGoal } from "./pages/ownGoal/ownGoal";
import { Contact } from "./pages/contact/contact";
import { Faq } from "./pages/faq/faq";
import { ThemeProvider } from "./providers/theme";

export const App = () => {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                <Headline />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/own-goal" element={<OwnGoal />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<h2>404 - Page not found!</h2>} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </>
    );
};
