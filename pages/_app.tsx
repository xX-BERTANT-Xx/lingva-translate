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
    </ChakraProvider>
);

export default App;
