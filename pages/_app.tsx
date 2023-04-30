import { AppProps } from "next/app";
import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@theme";
import { Layout } from "@components";
import { Analytics } from "@vercel/analytics/react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <ChakraProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
            <Analytics />
        </Layout>
        <script async src="https://ackee.workers.asia/tracker.js" data-ackee-server="https://ackee.workers.asia" data-ackee-domain-id="bb83d892-54c6-42ac-8270-1e2f7fbad7dd"></script>
    </ChakraProvider>
);

export default App;
