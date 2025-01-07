import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 6rem 0 5rem 0;
    background: url(${(props) => props.bg}) no-repeat center center/cover;

    #footer-container {
        max-width: 1260px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 2rem;
        gap: 3.5rem;
        color: #fff;

        div {
            p {
                font-size: 1.6rem;
            }

            div {
                display: flex;
                flex-wrap: wrap;
                gap: 3.5rem;
            }

            img {
                display: block;
            }
        }
    }
`;
