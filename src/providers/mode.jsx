import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleMode = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        const mode = localStorage.getItem("mode");
        if (mode === "dark") {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            localStorage.setItem("mode", "dark");
            document.body.classList.add("dark-mode");
        } else {
            localStorage.setItem("mode", "light");
            document.body.classList.remove("dark-mode");
        }
    }, [isDark]);

    return (
        <ModeContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
};
