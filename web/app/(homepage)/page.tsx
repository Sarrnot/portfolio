import AboutMeSection from "./_assets/parts/AboutMeSection";
import IntroSection from "./_assets/parts/IntroSection";
import PortfolioSection from "./_assets/parts/PortfolioSection";

const HomePage = () => {
    return (
        <main>
            <IntroSection />
            <AboutMeSection />
            <PortfolioSection />
            <section className="w-full h-[4000px] relative z-10 bg-red-500"></section>
        </main>
    );
};

export default HomePage;
