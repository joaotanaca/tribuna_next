import { createGlobalStyle, css } from "styled-components";
import fonts from "./font";

export default createGlobalStyle`
    ${fonts}
    html{
        scroll-behavior: smooth;
        font-family: 'SF-Pro-Text';
        font-weight: 400;
        width: 100%;
        height:100%;
    }
    
    body {
        background-color: #fafafa;
        padding: 40px 0;
        width: 100%;
        height:100%;
        #__next{
            width: 100%;
            height:100%;
        }
    }
`;
