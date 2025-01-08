import styled from "styled-components";

export const OwnGoalStyled = styled.main`
    padding: 3rem 0;
    max-width: 1260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    header {
        width: 100%;

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

    section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        .form {
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            div {
                display: flex;
                align-items: center;
                gap: 1rem;
                label {
                    font-size: 1.4rem;
                }

                input {
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid #cccccc;
                    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
                }
            }
        }

        .result {
            display: flex;
            justify-content: center;

            div {
                width: 30rem;
                height: 30rem;
                background-color: ${(props) => props.bg};
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                overflow: hidden;

                h3 {
                    color: #ffffff;
                    font-size: 3rem;
                    font-family: "Oswald", sans-serif;
                    text-transform: uppercase;
                    word-break: break-all;
                    text-align: center;
                }
            }
        }
    }
`;
