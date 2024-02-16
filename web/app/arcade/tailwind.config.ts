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
                primary: "#246B61",
                primaryLight: "#93BEB8",
                primaryDark: "#002520",
                secondary: "#AB6839",
                secondaryLight: "#FFDDC5",
                secondaryDark: "#3B1800",
                surface: "#FFFFFF",
                text: "#121212",
            },
        },
    },
    plugins: [],
};

export default config;
