"use client";

import { createContext, RefObject, useRef } from "react";

type Props = {
    children: React.ReactNode;
    height: number;
    className?: string;
    clip?: boolean;
    align?: "top" | "bottom";
};

type Context = {
    height: number;
    container: RefObject<HTMLDivElement>;
    align: "top" | "bottom";
} | null;

export const ParallaxContext = createContext<Context>(null);

const ParallaxContainer = (props: Props) => {
    const { children, height, className, clip = true, align = "top" } = props;

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={`w-full h-full absolute top-0 -z-10 ${className} ${
                clip && "parallax-clip"
            }`}
            ref={containerRef}
        >
            <ParallaxContext.Provider
                value={{ height, container: containerRef, align }}
            >
                {children}
            </ParallaxContext.Provider>
        </div>
    );
};

export default ParallaxContainer;
