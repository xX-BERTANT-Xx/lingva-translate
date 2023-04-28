import { FC } from "react";
import { Stack, Text, Link } from "@chakra-ui/react";

type Props = {
    [key: string]: any
};

const vercelSponsor = process.env["NEXT_PUBLIC_VERCEL_SPONSOR"] === "true";

const Footer: FC<Props> = (props) => (
    <Stack
        as="footer"
        w="full"
        p={3}
        fontSize={["sm", null, "md"]}
        direction={["column", null, "row"]}
        justify="center"
        align="center"
        spacing={[1, null, 2]}
        {...props}
    >
        <Link href="https://vercel.com?utm_source=lingva-team&utm_campaign=oss" isExternal={true}>
            <Text as="span" style={{color:"#2e5686"}}>Deployed on <code>▲ Vercel</code></Text>
        </Link>
        <Text as="span" display={["none", null, "unset"]}>·</Text>
        <Link href="https://github.com/thedaviddelta/lingva-translate" isExternal={true}>
            <Text as="span" style={{color:"#2e5686"}}>Powered by lingva-translate</Text>
        </Link>
        <Text as="span" display={["none", null, "unset"]}>·</Text>
        <Link href="https://www.gnu.org/licenses/agpl-3.0.html" isExternal={true}>
            <Text as="span" style={{color:"#2e5686"}}>Licensed under AGPLv3</Text>
        </Link>
        {vercelSponsor && (
            <>
                <Text as="span" display={["none", null, "unset"]}>·</Text>
                <Link href="https://vercel.com?utm_source=lingva-team&utm_campaign=oss" isExternal={true}>
                    <Text as="span" style={{color:"#2e5686"}}>▲ Website Powered by Vercel</Text>
                </Link>
            </>
        )}
    </Stack>
);

export default Footer;
