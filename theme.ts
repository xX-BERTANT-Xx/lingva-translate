import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const forceDefaultTheme = process.env["NEXT_PUBLIC_FORCE_DEFAULT_THEME"];

export default extendTheme({
    styles: {
        global: {
            "html, body, #__next": {
                height: "100%"
            },
            "#__next": {
                isolation: "isolate"
            }
        }
    },
    colors: {
        lingva: {
            50: "#e7f5ed",
            100: "#A9C0DB",
            200: "#92d1ab",
            300: "#64c08a",
            400: "#3cb372",
            500: "#2e5686",
            600: "#2e5686",
            700: "#008544",
            800: "#007439",
            900: "#005525"
        }
    },
    config: {
        initialColorMode: forceDefaultTheme === "light" || forceDefaultTheme === "dark" ? forceDefaultTheme : "system"
    },
    components: {
        Select: {
            variants: {
                flushed: (props: StyleFunctionProps) => ({
                    field: {
                        borderColor: mode("lingva.500", "lingva.200")(props)
                    }
                })
            }
        }
    }
});
