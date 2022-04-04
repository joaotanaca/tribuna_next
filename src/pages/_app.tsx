import GlobalProvider from "components/molecules/GlobalProvider";
import { ThemeProvider } from "context/theme";
import type { AppProps } from "next/app";
import Global from "styles/global";
import "quill/dist/quill.snow.css";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.min.css';
import "@pathofdev/react-tag-input/build/index.css";

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
