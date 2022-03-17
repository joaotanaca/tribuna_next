import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.gray5};
    &.error {
        ${({ theme }) => css`
            background-color: rgba(255, 45, 45, 0.1);
            color: ${({ theme }) => theme.red};
            label {
                color: ${({ theme }) => theme.red};
                &.active {
                    color: ${({ theme }) => theme.red};
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
