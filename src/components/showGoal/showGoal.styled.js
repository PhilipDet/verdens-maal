import styled from "styled-components";

export const ShowGoalStyled = styled.div`
    padding: 3rem 0 5rem 0;
    display: flex;
    justify-content: center;

    div {
        max-width: 1260px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0 2rem;

        h3 {
            font-size: 3rem;
        }

        h4 {
            font-size: 2.1rem;
        }

        p {
            line-height: 1.6;
        }

        div {
            margin: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            img {
                width: 100%;
            }

            iframe {
                width: 100%;
                height: 100%;
                border: none;
            }
        }
    }
`;
