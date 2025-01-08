import styled from "styled-components";

export const EducationStyled = styled.main`
    max-width: 1260px;
    padding: 2rem 0 5rem 0;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    p {
        font-size: 2.4rem;
        font-weight: 600;
    }

    #categories-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 2.5rem;

        div {
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;

            h2 {
                font-size: 3rem;
                font-family: "Oswald", sans-serif;
                text-transform: uppercase;
                color: #ffffff;
            }
        }
    }
`;
