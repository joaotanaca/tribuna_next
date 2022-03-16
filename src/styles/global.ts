import { createGlobalStyle, css } from "styled-components";
import fonts from "./font";

export default createGlobalStyle`
    ${fonts}
    html{
        scroll-behavior: smooth;
        font-family: 'SF-Pro-Text';
        font-weight: 400;
    }
    
    ${({ theme }) => css`
        body {
            background-color: ${theme.gray6};
        }
    `}
`;