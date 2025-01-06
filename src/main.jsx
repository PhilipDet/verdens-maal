import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./global-styled.js";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyled />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
