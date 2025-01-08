import styled from "styled-components";

export const ContactStyled = styled.main`
    padding: 3rem 0;
    margin: 0 2rem;
    max-width: 1260px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    p {
    }

    .form {
        width: 50%;
        display: flex;
        gap: 6rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;

            &:first-child {
                gap: 3.5rem;
            }

            &:last-child {
                width: 100%;
            }

            label {
                font-size: 1.4rem;

                &::after {
                    content: "*";
                    color: red;
                    font-size: 1.4rem;
                }
            }

            input,
            textarea {
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                border: 1px solid #cccccc;
                box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);

                &::placeholder {
                    font-size: 1.4rem;
                    font-family: "Open sans", sans-serif;
                }
            }

            textarea {
                resize: none;
                height: 15rem;
            }
        }
    }

    .actions {
        width: 50%;
        display: flex;
        justify-content: flex-end;

        button {
            padding: 0.5rem 2rem;
            border-radius: 0.5rem;
            background-color: #f7ebec;
            color: #000;
            font-size: 1.4rem;
            cursor: pointer;
            transition: background-color 0.3s;
            border: none;

            &:hover {
                background-color: rgb(174, 161, 164);
            }
        }
    }
`;
