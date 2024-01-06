import type { Config } from "tailwindcss";
import baseConfig from "../_assets/config/tailwind-base.config";
import { transform } from "next/dist/build/swc";

const config: Config = {
    content: {
        relative: true,
        files: ["./**/*.{ts,tsx}", "../_assets/**/*.{ts,tsx}"],
    },
    theme: {
        container: baseConfig.theme.container,
        extend: {
            colors: {
                primary: "#52555B",
                primaryLight: "#8F939B",
                primaryDark: "#04060A",
                secondary: "#898379",
                secondaryLight: "#E8E2D5",
                secondaryDark: "#1F1A11",
                surface: "#1B1C1E",
                text: "#F5F8FF",
                ok: "#2AB115",
                warning: "#D6B51A",
                error: "#D6271A",
            },
            animation: {
                customPing: "customPing 3s infinite",
                spinSlow: "spin 2s linear infinite",
            },
            keyframes: {
                customPing: {
                    "0%": { transform: "scale(1)", opacity: "1", blur: "0" },
                    "100%": {
                        transform: "scale(1.5)",
                        opacity: "0",
                        blur: "10rem",
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
