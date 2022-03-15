import { useTheme } from "context/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const GlobalProvider: React.FC = ({ children }) => {
    const { theme: key } = useTheme();
    return <ThemeProvider theme={theme[key]}>{children}</ThemeProvider>;
};

export default GlobalProvider;
