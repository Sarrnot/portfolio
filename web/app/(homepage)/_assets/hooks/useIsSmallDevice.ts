import { useEffect, useState } from "react";

const isSmall = () => window.innerHeight < 500;

const useIsSmallDevice = () => {
    const [isSmallDevice, setIsSmallDevice] = useState(isSmall());

    useEffect(() => {
        const listener = () => {
            if (isSmall()) setIsSmallDevice(true);
            else setIsSmallDevice(false);
        };

        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    return isSmallDevice;
};

export default useIsSmallDevice;
