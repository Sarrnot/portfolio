"use client";

import Image from "next/image";
import { useContext, useEffect, useMemo, useRef } from "react";
import useIsSmallDevice from "../../hooks/useIsSmallDevice";
import { ParallaxContext } from "./ParallaxContainer";

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

const easeFn = (coeficient: number, power: number) => {
    if (coeficient <= 0) return 0;
    if (coeficient >= 1) return 1;

    return coeficient ** power;
};

const calcOffset = (
    speed: number,
    container: HTMLElement,
    parallax: { height: number; align: "top" | "bottom"; element: HTMLElement }
) => {
    const containerCoords = container.getBoundingClientRect();
    const parallaxCoords = parallax.element.getBoundingClientRect();

    const parallaxOffset =
        parallax.align === "bottom"
            ? containerCoords.height - parallaxCoords.height
            : 0;
    const containerY = containerCoords.y + window.scrollY;
    const parallaxY = containerY + parallaxOffset;
    const distanceFromScroll = parallaxY - window.scrollY;
    const topThreshold = 400;
    let parallaxEffect = distanceFromScroll * (1 - speed / 100);

    if (distanceFromScroll > 0) {
        parallaxEffect -=
            (distanceFromScroll - topThreshold) *
            ((1 - speed / 100) * easeFn(distanceFromScroll / topThreshold, 3));
    }

    return parallaxY - window.scrollY - parallaxEffect;
};
const setTransform = (element: HTMLElement | null, value: string) => {
    if (!element) return;
    element.style.transform = value;
};

const width = 3000;
const height = 1000;

const Parallax = (props: Props) => {
    const { name, speed, repeated } = props;

    const context = useContext(ParallaxContext);
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
        if (!context) return;

        const listener = () => {
            if (!context.container.current) return;
            if (!mainRef.current) return;

            const offset = calcOffset(speed, context.container.current, {
                height,
                align: context.align,
                element: mainRef.current,
            });

            setTransform(mainRef.current, `translate(-50%, ${offset}px)`);
            setTransform(repeatedRef.current, `translateY(${offset}px)`);
        };

        listener();
        window.addEventListener("scroll", listener);
        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("scroll", listener);
            window.removeEventListener("resize", listener);
            setTransform(mainRef.current, "translate(-50%, 0)");
            setTransform(repeatedRef.current, "none");
        };
    }, [
        isSmallDevice,
        speed,
        context?.container.current,
        height,
        context?.align,
        mainRef.current,
    ]);

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
