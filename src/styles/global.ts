import { createGlobalStyle } from "styled-components";
import fonts from "./font";

export default createGlobalStyle`
    ${fonts}
    html{
        scroll-behavior: smooth;
        font-family: 'SF-Pro-Text';
        font-weight: 400;
    }
    
    body {
        background-color: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
    }
`;
