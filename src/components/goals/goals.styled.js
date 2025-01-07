import styled from "styled-components";

export const GoalsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-color: #eeeeee;
    width: 100%;
    padding: 2rem 2rem 9rem 2rem;

    h2 {
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 700;
        font-family: "Oswald", serif;
    }

    #goals-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        max-width: 1260px;
        width: 100%;

        .goal {
            width: 200px;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
            cursor: pointer;
            text-decoration: none;

            .goal-text {
                display: flex;
                align-items: flex-start;
                color: #fff;
                gap: 1rem;

                h3 {
                    font-size: 6rem;
                    font-family: "Oswald", serif;
                    line-height: 0.9;
                }

                p {
                    font-size: 2.4rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    word-break: break-all;
                    font-family: "Oswald", serif;
                    line-height: 1.2;
                }
            }

            .goal-icon {
                width: 50%;
                filter: invert(100%);
                margin: 0 auto;
            }
        }
    }
`;
