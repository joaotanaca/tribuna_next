import Button from "atoms/Button";
import { useTheme } from "context/theme";
import React from "react";

import { Container } from "./styles";

const NavBlog: React.FC = () => {
    const { handleTheme, theme } = useTheme();
    return (
        <Container className="w-full px-8 py-6 mb-8 flex items-center justify-between sticky top-0 left-0">
            Blog
            <Button onClick={handleTheme}>{theme}</Button>
        </Container>
    );
};

export default NavBlog;
