import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";

import styled, { css } from "styled-components";

type ButtonStyled = {
    inverse?: boolean;
};

const Container = styled.button<ButtonStyled>`
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
const Button: React.FC<
    ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyled
> = ({ children, className, ...props }) => (
    <Container
        className={`${className} rounded-lg px-2.5 py-3.5 transition-all`}
        {...props}
    >
        {children}
    </Container>
);

export default Button;
