import AboutMeSection from "./_assets/parts/AboutMeSection";
import IntroSection from "./_assets/parts/IntroSection";
import PortfolioSection from "./_assets/parts/PortfolioSection";
import UnderwaterParallax from "./_assets/parts/UnderwaterParallax";

const HomePage = () => {
    return (
        <main>
            <IntroSection />
            <div className="relative z-10 bg-blue-500">
                <AboutMeSection />
                <PortfolioSection />
                <UnderwaterParallax />
            </div>
            <section className="w-full h-[4000px] relative z-10 bg-red-500"></section>
        </main>
    );
};

export default HomePage;
