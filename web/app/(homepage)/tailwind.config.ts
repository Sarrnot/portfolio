import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/(homepage)/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                primary: "#2950BA",
                primaryLight: "#496AC5",
                primaryLightest: "#6E8AD5",
                primaryDark: "#1037A2",
                primaryDarkest: "#0B2A7D",
                secondary: "#FFB720",
                secondaryLight: "#FFC54A",
                secondaryLightest: "#FFD375",
                secondaryDark: "#F1A400",
                secondaryDarkest: "#BA7E00",
            },
            height: {
                // @ts-ignore
                screen: ["100vh", "100svh"],
            },
            minHeight: {
                // @ts-ignore
                screen: ["100vh", "100svh"],
            },
        },
    },
    plugins: [],
};

export default config;
