"use client";

import Image from "next/image";
import { useContext, useMemo, useRef } from "react";
import useIsSmallDevice from "../../hooks/useIsSmallDevice";
import { ParallaxContext } from "./ParallaxContainer";
import useParallax from "./useParallax";

type Props = {
    name: string;
    speed: number;
    repeated?: boolean;
};

const BASE_URL = "/images/parallax";
const AlignStyles = {
    top: "top-0",
    bottom: "bottom-0",
};

const width = 3000;
const height = 1000;

const Parallax = (props: Props) => {
    const { name, speed, repeated } = props;

    const context = useContext(ParallaxContext);
    const isSmallDevice = useIsSmallDevice();
    const mainRef = useRef<HTMLImageElement>(null);
    const repeatedRef = useRef<HTMLDivElement>(null);
    const position = useMemo(
        () => (speed === 100 || isSmallDevice ? "absolute" : "fixed"),
        [speed, isSmallDevice]
    );

    useParallax({
        parallax: mainRef,
        container: context?.container ?? null,
        speed,
        align: context?.align ?? "top",
        baseXOffset: -50,
        topThreshold: context?.topThreshold ?? 0,
    });

    useParallax({
        parallax: repeatedRef,
        container: context?.container ?? null,
        speed,
        align: context?.align ?? "top",
        topThreshold: context?.topThreshold ?? 0,
    });

    if (!context) return <></>;

    return (
        <>
            <Image
                src={`${BASE_URL}/${name}.svg`}
                alt="Background"
                className={`${position} max-w-none left-1/2 -translate-x-1/2 z-10 ${
                    position === "absolute"
                        ? AlignStyles[context.align]
                        : "top-0"
                }`}
                width={width}
                height={height}
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

export default Parallax;
