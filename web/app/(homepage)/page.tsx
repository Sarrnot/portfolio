"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const HomePage = () => {
    return (
        <main>
            <section className="h-[1000px] relative flex justify-center items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center relative bottom-40 z-10">
                    Let's dive together <br />
                    into <span className="uppercase">web&nbsp;development</span>
                </h1>
                <div className="h-full w-full overflow-hidden absolute top-0">
                    <>
                        <RepeatTest name="repeat_sky" speed={0} />
                        <RepeatTest name="repeat_mountains_back" speed={20} />
                        <RepeatTest name="repeat_mountains" speed={30} />
                        <RepeatTest name="repeat_forest" speed={75} />
                        <RepeatTest name="repeat_land" speed={85} />
                        <RepeatTest name="repeat_water" speed={100} />
                    </>
                    <>
                        <Test name="sky" speed={0} />
                        <Test name="sun" speed={0} />
                        <Test name="mountains_back" speed={20} />
                        <Test name="mountains" speed={30} />
                        <Test name="forest" speed={75} />
                        <Test name="land" speed={85} />
                        <Test name="water" speed={100} />
                        <Test name="boat" speed={100} />
                        <Test name="reflections" speed={100} />
                    </>
                </div>
            </section>
            <section className="w-full h-[4000px] relative z-10 bg-red-500"></section>
        </main>
    );
};

type TestProps = {
    name: string;
    speed: number;
};

const Test = (props: TestProps) => {
    const { name, speed } = props;

    const ref = useRef<HTMLImageElement>(null);
    const position = speed === 100 ? "absolute" : "fixed";

    useEffect(() => {
        if (speed === 100) return;

        const listener = () => {
            if (!ref.current) return;
            ref.current.style.transform = `translate(-50%, ${
                -window.scrollY * (speed / 100)
            }px)`;
        };

        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <Image
            src={`/images/parallax/${name}.svg`}
            alt="Background"
            className={`h-[1000px] ${position} top-0 max-w-none left-1/2 -translate-x-1/2`}
            width={3000}
            height={1000}
            ref={ref}
            priority={true}
        />
    );
};

const RepeatTest = (props: TestProps) => {
    const { name, speed } = props;

    const ref = useRef<HTMLDivElement>(null);
    const position = speed === 100 ? "absolute" : "fixed";

    useEffect(() => {
        if (speed === 100) return;

        const listener = () => {
            if (!ref.current) return;
            ref.current.style.transform = `translateY(${
                -window.scrollY * (speed / 100)
            }px)`;
        };

        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(/images/parallax/${name}.svg)` }}
            className={`h-[1000px] w-full ${position} top-0 bg-center`}
            ref={ref}
        />
    );
};
export default HomePage;
