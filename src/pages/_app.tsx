import type { AppProps } from "next/app";
import "quill/dist/quill.snow.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
