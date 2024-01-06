import type { Config } from "tailwindcss";
import baseConfig from "../_assets/config/tailwind-base.config";

const config: Config = {
    content: {
        relative: true,
        files: ["./**/*.{ts,tsx}", "../_assets/**/*.{ts,tsx}"],
    },
    theme: {
        container: baseConfig.theme.container,
        extend: {
            colors: {
                primary: "#2950BA",
                primaryLight: "#6E8AD5",
                primaryDark: "#0B2A7D",
                secondary: "#FFB720",
                secondaryLight: "#FFD375",
                secondaryDark: "#BA7E00",
                surface: "#FFFFFF",
                text: "#121212",
            },
            // @ts-ignore
            height: baseConfig.theme.extend.height,
            // @ts-ignore
            minHeight: baseConfig.theme.extend.minHeight,
        },
    },
    plugins: [],
};

export default config;
