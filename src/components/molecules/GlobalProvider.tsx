import { useTheme } from "context/theme";
import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const GlobalProvider: React.FC = ({ children }) => {
    const { theme: key } = useTheme();
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ThemeProvider theme={theme[key]}>{children}</ThemeProvider>
        </>
    );
};

export default GlobalProvider;
