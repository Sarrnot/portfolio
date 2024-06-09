import Image from "next/image";
import SECTION_ID from "../constants/SECTION_ID";
import { H2, H3 } from "@/_assets/components/Heading";

const PortfolioSection = () => {
    return (
        <section
            className="flex flex-col items-center bg-blue-900 relative z-10 px-6 md:px-12 py-20"
            id={SECTION_ID.portfolio}
        >
            <H2>Portfolio</H2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 flew-wrap w-full">
                <div className="flex flex-col items-center">
                    <H3>
                        Server monitoring
                        <br />
                        <span className="font-normal">(demo app)</span>
                    </H3>
                    <a
                        href="/monitoring"
                        className="overflow-hidden shadow-xl rounded-full aspect-square relative w-full max-w-md"
                    >
                        <Image
                            src="/images/monitoring_app.png"
                            className="hover:scale-110 transition-transform duration-500 absolute object-cover w-full h-full"
                            loading="lazy"
                            width={500}
                            height={475}
                            alt="Monitoring"
                        />
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <H3>
                        Arcade
                        <br />
                        <span className="font-normal">(demo app)</span>
                    </H3>
                    <a
                        href="/arcade"
                        className="overflow-hidden shadow-xl rounded-full aspect-square relative w-full max-w-md"
                    >
                        <Image
                            src="/images/arcade_app.png"
                            className="hover:scale-110 transition-transform duration-500 absolute object-cover w-full h-full"
                            loading="lazy"
                            width={500}
                            height={401}
                            alt="Monitoring"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
