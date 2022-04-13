import GlobalProvider from "components/molecules/GlobalProvider";
import { ThemeProvider } from "context/theme";
import type { AppProps } from "next/app";
import Global from "styles/global";
import "quill/dist/quill.snow.css";
import "styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import "@pathofdev/react-tag-input/build/index.css";
import Layout from "organisms/Layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <GlobalProvider>
                <Global />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </GlobalProvider>
        </ThemeProvider>
    );
}

export default MyApp;
