import { HeadlineStyled } from "./headline.styled";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { goals } from "../../data/sdg";

export const Headline = () => {
    const [headline, setHeadline] = useState("");
    let location = useLocation();
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const goalId = searchParams.get("goal");
        console.log(goalId);

        if (goalId) {
            const goal = goals.find((g) => g.id === goalId);
            if (goal) {
                setHeadline(`Mål ${goalId}: ${goal.title}`);
                return;
            }
        }

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
    }, [location, searchParams]);

    return (
        <HeadlineStyled>
            <h1 id="headline">{headline}</h1>
        </HeadlineStyled>
    );
};
