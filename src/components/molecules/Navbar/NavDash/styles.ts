import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.gray5};
        color: ${theme.text};
    `}
`;
