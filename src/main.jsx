import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./styled/global-styled.js";
import { App } from "./App.jsx";
import { ModeProvider } from "./providers/mode.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ModeProvider>
            <GlobalStyled />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ModeProvider>
    </StrictMode>
);
