import React from "react";

import styled, { css } from "styled-components";

type ButtonStyled = { inverse?: boolean };

const Button = styled.button.attrs({
    className: "rounded-lg px-2.5 py-3.5 transition-all",
})<ButtonStyled>`
    ${({ inverse, theme }) => css`
        ${inverse
            ? css`
                  background-color: transparent;
                  color: ${theme.blue};
                  &:active {
                      background-color: ${theme.blue};
                      color: #fff;
                  }
              `
            : css`
                  background-color: ${theme.blue};
                  color: #fff;
                  &:active {
                      background-color: transparent;
                      color: ${theme.blue};
                  }
              `}
        &:disabled {
            background-color: ${theme.gray5};
            color: ${theme.gray1};
        }
    `}
`;

export default Button;
