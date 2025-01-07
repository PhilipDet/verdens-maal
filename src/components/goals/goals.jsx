import { GoalsStyled } from "./goals.styled";
import { goals } from "../../data/sdg";
import { Link } from "react-router-dom";

export const Goals = () => {
    return (
        <GoalsStyled>
            <h2>FN's 17 verdensmål for bæredygtig udvikling</h2>
            <div id="goals-container">
                {goals.map((goal, index) => (
                    <Link
                        to={`?goal=${goal.id}`}
                        key={index}
                        className="goal"
                        style={{ backgroundColor: `#${goal.color}` }}
                    >
                        <div className="goal-text">
                            <h3>{goal.id}</h3>
                            <p style={{ fontSize: `${goal.fontsize}` }}>
                                {goal.title}
                            </p>
                        </div>
                        <div
                            className="goal-icon"
                            dangerouslySetInnerHTML={{ __html: goal.icon }}
                        />
                    </Link>
                ))}
            </div>
        </GoalsStyled>
    );
};
