import styled from "styled-components";

export const ContainerDrop = styled.div`
    flex: 1;
    border-width: 2px;
    border-color: ${({ theme }) => theme.gray4};
    background-color: #fff;
    color: ${({ theme }) => theme.gray4};
    transition: border 0.24s ease-in-out;
    &.focus {
        border-color: ${({ theme }) => theme.blue};
    }
    &.accept {
        border-color: ${({ theme }) => theme.green};
    }
    &.reject {
        border-color: ${({ theme }) => theme.red};
    }
`;
