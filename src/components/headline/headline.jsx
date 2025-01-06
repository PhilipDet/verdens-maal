import { HeadlineStyled } from "./headline.styled";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Headline = () => {
    const [headline, setHeadline] = useState("");
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setHeadline("Verdensmålene");
                break;
            case "/teaching":
                setHeadline("Undervisning");
                break;
            case "/own-goal":
                setHeadline("Byg dit eget mål");
                break;
            case "/faq":
                setHeadline("FAQ");
                break;
            case "/contact":
                setHeadline("Kontakt os");
                break;
            default:
                setHeadline("404 - Page not found!");
                break;
        }
    }, [location]);

    return (
        <HeadlineStyled>
            <h1 id="headline">{headline}</h1>
        </HeadlineStyled>
    );
};
