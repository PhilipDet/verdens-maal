import styled from "styled-components";

export const NavbarStyled = styled.nav`
    display: flex;
    justify-content: center;
    border-top: 30px solid rgba(43, 187, 222, 1);
    width: 100%;

    ul {
        max-width: 1260px;
        width: 100%;
        padding: 2.5rem 0;
        margin: 0 2rem;
        gap: 2.5rem;
        list-style: none;
        display: flex;
        align-items: center;

        li {
            &:first-child {
                margin-right: auto;
            }

            a {
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: 700;
                text-decoration: none;
                color: #000;

                &.nav-active {
                    color: rgba(43, 187, 222, 1);
                }
            }

            div {
                position: relative;
                width: 2rem;
                height: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    position: absolute;
                    z-index: 1;
                }

                input[type="checkbox"] {
                    position: absolute;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    cursor: pointer;
                }
            }
        }
    }
`;
