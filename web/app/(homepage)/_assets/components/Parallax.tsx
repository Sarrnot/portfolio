"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

type Props = {
    name: string;
    speed: number;
    repeated?: boolean;
};

const BASE_URL = "/images/parallax";
const calcOffset = (speed: number) => -window.scrollY * (speed / 100);

const Parallax = (props: Props) => {
    const { name, speed, repeated } = props;

    const mainRef = useRef<HTMLImageElement>(null);
    const repeatedRef = useRef<HTMLImageElement>(null);
    const position = useMemo(
        () => (speed === 100 ? "absolute" : "fixed"),
        [speed]
    );

    useEffect(() => {
        if (speed === 100) return;

        const listener = () => {
            const offset = calcOffset(speed);

            if (mainRef.current) {
                mainRef.current.style.transform = `translate(-50%, ${offset}px)`;
            }
            if (!repeated) return;
            if (repeatedRef.current) {
                repeatedRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <>
            <Image
                src={`${BASE_URL}/${name}.svg`}
                alt="Background"
                className={`h-[1000px] ${position} top-0 max-w-none left-1/2 -translate-x-1/2 z-10`}
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

export default Parallax;
