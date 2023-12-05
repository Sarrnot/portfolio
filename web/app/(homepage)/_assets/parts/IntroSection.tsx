import Image from "next/image";
import SECTION_ID from "../constants/SECTION_ID";
import ScrollNext from "../components/ScrollNext";

const IntroSection = () => {
    return (
        <section
            className="flex flex-col justify-center items-center h-screen min-h-[700px] relative"
            id={SECTION_ID.about}
        >
            <div className="text-3xl text-center mb-8">Hi, I'm Zdeněk</div>
            <div className="text-3xl font-bold text-center mb-8">
                Full Stack Developer
            </div>
            <Image
                src="/images/portrait_square_low-res.jpg"
                className="rounded-full shadow-xl outline-2 outline-primary outline"
                alt="Portrait"
                loading="lazy"
                width={256}
                height={256}
            />
            <ScrollNext
                text="Learn more about what I do"
                sectionId={SECTION_ID.portfolio}
            />
        </section>
    );
};

export default IntroSection;
