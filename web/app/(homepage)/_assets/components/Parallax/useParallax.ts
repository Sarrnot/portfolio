import { RefObject, useEffect } from "react";
import useIsSmallDevice from "../../hooks/useIsSmallDevice";

type Options = {
    speed: number;
    align: "top" | "bottom";
    parallax: RefObject<HTMLElement>;
    container: RefObject<HTMLElement> | null;
    topThreshold: number;
    baseXOffset?: number;
};

const easeFn = (coeficient: number, power: number) => {
    if (coeficient <= 0) return 0;
    if (coeficient >= 1) return 1;

    return coeficient ** power;
};

const calcOffset = (
    speed: number,
    container: HTMLElement,
    parallaxElem: HTMLElement,
    align: "top" | "bottom",
    topThreshold: number
) => {
    const containerCoords = container.getBoundingClientRect();
    const parallaxCoords = parallaxElem.getBoundingClientRect();

    const parallaxOffset =
        align === "bottom" ? containerCoords.height - parallaxCoords.height : 0;
    const containerY = containerCoords.y + window.scrollY;
    const parallaxY = containerY + parallaxOffset;
    const distanceFromScroll = parallaxY - window.scrollY;
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

/**
 * Custom hook for calculating and applying parallax.
 * Tightly coupled with Parallax. Not meant to be a general purpose functionality, only pulled out for better readability.
 */
const useParallax = (options: Options) => {
    const {
        speed,
        parallax,
        align,
        container,
        topThreshold,
        baseXOffset = 0,
    } = options;

    const isSmallDevice = useIsSmallDevice();

    useEffect(() => {
        if (speed === 0 || speed === 100) return;
        if (isSmallDevice) return;

        const listener = () => {
            if (!container?.current) return;
            if (!parallax.current) return;

            const offset = calcOffset(
                speed,
                container.current,
                parallax.current,
                align,
                topThreshold
            );

            setTransform(
                parallax.current,
                `translate(${baseXOffset}%, ${offset}px)`
            );
        };

        listener();
        window.addEventListener("scroll", listener);
        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("scroll", listener);
            window.removeEventListener("resize", listener);
            setTransform(parallax.current, "none");
        };
    }, [
        isSmallDevice,
        speed,
        container?.current,
        align,
        parallax.current,
        baseXOffset,
    ]);
};

export default useParallax;
