import Image from "next/image";
import SECTION_ID from "../constants/SECTION_ID";
import { H2, H3 } from "@/_assets/components/Heading";

const PortfolioSection = () => {
    return (
        <section
            className="flex flex-col items-center"
            id={SECTION_ID.portfolio}
        >
            <H2>Portfolio</H2>

            <H3>Server monitoring (demo app)</H3>
            <a href="/monitoring" className="overflow-hidden shadow-xl">
                <Image
                    src="/images/monitoring_app.png"
                    className="hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={500}
                    height={475}
                    alt="Monitoring"
                />
            </a>

            <H3 className="mt-10">Arcade (demo app)</H3>
            <a href="/arcade" className="overflow-hidden shadow-xl">
                <Image
                    src="/images/arcade_app.png"
                    className="hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={500}
                    height={401}
                    alt="Monitoring"
                />
            </a>
        </section>
    );
};

export default PortfolioSection;
