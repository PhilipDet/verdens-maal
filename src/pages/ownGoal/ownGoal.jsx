import { OwnGoalStyled } from "./ownGoal.styled";
import { useState } from "react";

export const OwnGoal = () => {
    const [title, setTitle] = useState("Min måltekst");
    const [color, setColor] = useState("#27BDDF");

    const handleTitle = (e) => {
        const newTitle = e.target.value;

        if (newTitle === "") {
            setTitle("Min måltekst");
        } else {
            setTitle(newTitle);
        }
    };

    const handleColor = (e) => {
        const hexColor = e.target.value;
        const isValidHex = /^#[0-9A-F]{6}$/i.test(hexColor);

        if (isValidHex) {
            setColor(hexColor);
        } else {
            setColor("#27BDDF");
        }
    };

    return (
        <OwnGoalStyled bg={color}>
            <header>
                <h2>Mangler der et mål?</h2>
                <p>
                    Med tekst feltet herunder kan du bygge dit eget mål og give
                    det en bestemt farve.
                </p>
            </header>

            <section>
                <div className="form">
                    <div>
                        <label htmlFor="title">Måltekst:</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="Indtast title på mål"
                            onChange={handleTitle}
                        />
                    </div>
                    <div>
                        <label htmlFor="color">Farvekode:</label>
                        <input
                            name="color"
                            type="text"
                            placeholder="Indtast farvekode i heximal værdi"
                            onChange={handleColor}
                        />
                    </div>
                </div>

                <div className="result">
                    <div>
                        <h3>{title}</h3>
                    </div>
                </div>
            </section>
        </OwnGoalStyled>
    );
};
