import Separator from "./_assets/components/Separator";
import ContactSection from "./_assets/parts/ContactSection";
import IntroSection from "./_assets/parts/IntroSection";
import PortfolioSection from "./_assets/parts/PortfolioSection";
import TechnologiesSection from "./_assets/parts/TechnologiesSection";

const HomePage = () => {
    return (
        <main>
            <div className="container flex flex-col gap-8">
                <IntroSection />
                <Separator />
                <PortfolioSection />
                <Separator />
                <TechnologiesSection />
                <Separator />
                <ContactSection />
            </div>
        </main>
    );
};

export default HomePage;
