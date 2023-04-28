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
            50: "#A9C0DB",
            100: "#A9C0DB",
            200: "#A9C0DB",
            300: "#2e5686",
            400: "#2e5686",
            500: "#2e5686",
            600: "#2e5686",
            700: "#2e5686",
            800: "#007439",
            900: "#2e5686"
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
