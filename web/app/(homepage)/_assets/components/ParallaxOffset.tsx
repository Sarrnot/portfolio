"use client";

import Image from "next/image";
import { use, useEffect, useMemo, useRef } from "react";
import useIsSmallDevice from "../hooks/useIsSmallDevice";

type Props = {
    name: string;
    speed: number;
    repeated?: boolean;
};

const BASE_URL = "/images/parallax";
const calcOffset = (speed: number) => {
    const containerY = 1200;
    const containerHeight = 1000;
    const containerMiddle = containerY + containerHeight / 2;
    const viewportMiddle = window.scrollY + window.innerHeight / 2;
    const coeficient = Math.max(window.innerHeight / 1000, 1);

    return (
        containerY -
        window.scrollY +
        (viewportMiddle - containerMiddle) * ((1 - speed / 100) / coeficient)
    );
    // (window.scrollY + window.innerHeight - 1200) *
    //     (speed / 100 / Math.max(window.innerHeight / 1000, 1));
};
const setTransform = (element: HTMLElement | null, value: string) => {
    if (!element) return;
    element.style.transform = value;
};

const ParallaxOffset = (props: Props) => {
    const { name, speed, repeated } = props;

    const isSmallDevice = useIsSmallDevice();
    const mainRef = useRef<HTMLImageElement>(null);
    const repeatedRef = useRef<HTMLImageElement>(null);
    const position = useMemo(
        () => (speed === 100 || isSmallDevice ? "absolute" : "fixed"),
        [speed, isSmallDevice]
    );

    useEffect(() => {
        if (speed === 100) return;
        if (isSmallDevice) return;

        const listener = () => {
            const offset = calcOffset(speed);

            setTransform(mainRef.current, `translate(-50%, ${offset}px)`);
            setTransform(repeatedRef.current, `translateY(${offset}px)`);
        };

        listener();
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
            setTransform(mainRef.current, "translate(-50%, 0)");
            setTransform(repeatedRef.current, "none");
        };
    }, [isSmallDevice]);

    return (
        <>
            <Image
                src={`${BASE_URL}/${name}.svg`}
                alt="Background"
                className={`h-[1000px] ${position} ${
                    position === "absolute" ? "bottom-0" : "top-0"
                } max-w-none left-1/2 -translate-x-1/2 z-10`}
                width={3000}
                height={1000}
                ref={mainRef}
                priority={true}
            />
            {repeated && (
                <div
                    style={{
                        backgroundImage: `url(${BASE_URL}/${name}.svg)`,
                    }}
                    className={`h-[1000px] w-full ${position} top-0 bg-center`}
                    ref={repeatedRef}
                />
            )}
        </>
    );
};

export default ParallaxOffset;
