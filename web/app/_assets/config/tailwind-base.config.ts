import NAVBAR_HEIGHT from "../constants/NAVBAR_HEIGHT";

const baseConfig = {
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            height: {
                screen: [
                    `calc(100vh - ${NAVBAR_HEIGHT.rem}rem)`,
                    `calc(100svh - ${NAVBAR_HEIGHT.rem}rem)`,
                ],
            },
            minHeight: {
                screen: [
                    `calc(100vh - ${NAVBAR_HEIGHT.rem}rem)`,
                    `calc(100svh - ${NAVBAR_HEIGHT.rem}rem)`,
                ],
            },
        },
    },
};

export default baseConfig;
