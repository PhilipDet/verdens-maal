import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: "Open Sans", sans-serif;
        font-size: 1.6rem;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1, a {
        font-family: "Oswald", serif;
    }

    main {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
