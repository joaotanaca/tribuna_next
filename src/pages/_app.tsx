import GlobalProvider from "components/molecules/GlobalProvider";
import { ThemeProvider } from "context/theme";
import type { AppProps } from "next/app";
import "quill/dist/quill.snow.css";
import Global from "styles/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <GlobalProvider>
                <Global />
                <Component {...pageProps} />
            </GlobalProvider>
        </ThemeProvider>
    );
}

export default MyApp;
