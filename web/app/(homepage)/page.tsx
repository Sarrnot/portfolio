import Parallax from "./_assets/components/Parallax";

const HomePage = () => {
    return (
        <main>
            <section className="h-[1000px] relative flex justify-center items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center relative bottom-40 z-30">
                    Let's dive together <br />
                    into <span className="uppercase">web&nbsp;development</span>
                </h1>
                <div className="h-full w-full overflow-hidden absolute top-0">
                    <Parallax name="sky" speed={0} repeated />
                    <Parallax name="sun" speed={0} />
                    <Parallax name="mountains_back" speed={20} repeated />
                    <Parallax name="mountains" speed={30} repeated />
                    <Parallax name="forest" speed={75} repeated />
                    <Parallax name="land" speed={85} repeated />
                    <Parallax name="water" speed={100} repeated />
                    <Parallax name="boat" speed={100} />
                    <Parallax name="reflections" speed={100} />
                </div>
            </section>
            <section className="w-full h-[4000px] relative z-10 bg-red-500"></section>
        </main>
    );
};

export default HomePage;
