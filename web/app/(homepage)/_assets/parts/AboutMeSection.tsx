import Image from "next/image";

const AboutMeSection = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10 bg-blue-900 px-6 py-20">
            <div className="text-3xl text-center">
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
        </section>
    );
};

export default AboutMeSection;
