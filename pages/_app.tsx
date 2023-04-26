import { AppProps } from "next/app";
import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@theme";
import { Layout } from "@components";
import { Analytics } from '@vercel/analytics/react';

const App: FC<AppProps> = function({ Component, pageProps }) {
<ChakraProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
    return(
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default App;
