import { createContext, useContext } from "react";
import { ModeContext } from "./mode";

export const ThemeContext = createContext();

const lightTheme = {
    background: "#ffffff",
    color: "#000000",
};

const darkTheme = {
    background: "#000000",
    color: "#ffffff",
};

export const ThemeProvider = ({ children }) => {
    const { isDark } = useContext(ModeContext);
    const theme = isDark ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
