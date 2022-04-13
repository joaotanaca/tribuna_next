import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.gray6};
    ${({ theme }) =>
        theme.theme === "dark"
            ? css`
                  border-bottom: 1px solid ${theme.blue};
                  border-radius:4px;
                  border-bottom-right-radius:0;
                  border-bottom-left-radius:0;
              `
            : null}
    &.error {
        ${({ theme }) => css`
            background-color: rgba(255, 45, 45, 0.1);
            color: ${theme.red};
            label {
                color: ${theme.red};
                &.active {
                    color: ${theme.red};
                }
            }
        `}
    }
    label {
        top: calc(50%);
        left: 8px;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.gray1};
        z-index: 0;
        &.active {
            color: ${({ theme }) => theme.blue};
            top: -10px;
            left: 0;
        }
    }
    input {
        z-index: 10;
    }
`;

export const Error = styled.span`
    color: ${({ theme }) => theme.red};
`;
