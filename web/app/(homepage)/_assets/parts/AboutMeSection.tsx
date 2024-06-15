import { H2 } from "@/_assets/components/Heading";
import Image from "next/image";

const AboutMeSection = () => {
    return (
        <section className="px-6 md:px-12 py-20">
            <H2>About me</H2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                <div className="text-3xl text-center md:basis-5/12 lg:basis-auto">
                    Hi, I'm Zdeněk <br />
                    and I can be your next<span className="text-lg">(.js)</span>
                    &nbsp;developer
                </div>
                <Image
                    src="/images/portrait_square_low-res.jpg"
                    className="rounded-full shadow-xl outline-2 outline-primary outline"
                    alt="Portrait"
                    loading="lazy"
                    width={256}
                    height={256}
                />
            </div>
        </section>
    );
};

export default AboutMeSection;
