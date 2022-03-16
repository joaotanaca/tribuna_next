import styled from "styled-components";

export const ContainerHeader = styled.div.attrs({
    className: "w-3/4 mx-auto text-center grid grid-cols-12 gap-4",
})`
    line-height: 1.2;
    h1 {
        font-size: 50px;
    }
`;

export const Container = styled.div.attrs({
    className: "w-full mx-auto flex flex-col gap-4",
})`
    max-width: 1080px;
    img {
        height: 430px;
    }
`;

export const Content = styled.div`
    a {
        color: ${({ theme }) => theme.blue}!important;
    }
`;
