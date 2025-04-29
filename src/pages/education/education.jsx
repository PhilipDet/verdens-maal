import { useEffect, useState } from "react";
import { EducationStyled } from "./education.styled";
import axios from "axios";

export const Education = () => {
    const [categories, setCategories] = useState([]);

    const fetchData = () => {
        axios
            .get("https://api.mediehuset.net/sdg/edu")
            .then((response) => {
                console.log(response.data.items);

                setCategories(response.data.items);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                {categories.map((item) => (
                    <div
                        key={item.id}
                        style={{ backgroundColor: `#${item.color}` }}
                    >
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </EducationStyled>
    );
};
