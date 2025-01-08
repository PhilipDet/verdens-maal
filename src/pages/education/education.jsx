import { EducationStyled } from "./education.styled";

export const Education = () => {
    const categories = [
        { name: "Biologi", color: "#A41942" },
        { name: "Bioteknologi", color: "#DFA63B" },
        { name: "Kemi", color: "#4BA039" },
        { name: "Dansk", color: "#FF81FF" },
        { name: "Design", color: "#3101C9" },
        { name: "Historie", color: "#98C89E" },
        { name: "Fysik", color: "#0C6C9A" },
        { name: "Idræt", color: "#27BDDF" },
        { name: "Matematik", color: "#6591A5" },
    ];

    return (
        <EducationStyled>
            <p>
                Her finder du inspiration til din undervisning i form af
                introducerende øvelser, der kan bruges til at sætte
                verdensmålene i spil sammen med dine elever. Øvelserne er
                udarbejdet på baggrund af bogen "Bliver verden bedre" og
                kernestof i fagene.
            </p>
            <div id="categories-container">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: category.color }}
                    >
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </EducationStyled>
    );
};
