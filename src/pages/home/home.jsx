import { HomeStyled } from "./home.styled";
import { Goals } from "../../components/goals/goals";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ShowGoal } from "../../components/showGoal/showGoal";

export const Home = () => {
    const [goal, setGoal] = useState(0);
    let [searchParams] = useSearchParams();
    let location = useLocation();

    useEffect(() => {
        setGoal(searchParams.get("goal"));
    }, [location]);
    return (
        <HomeStyled>
            <ShowGoal goal={goal} />
            <Goals />
        </HomeStyled>
    );
};
