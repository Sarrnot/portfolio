import Box from "../components/Box";
import { H2 } from "../components/Heading";
import SECTION_ID from "../constants/SECTION_ID";

const languageItems = ["TypeScript"];
const frontendItems = ["React", "TailwindCSS", "Sass"];
const backendItems = ["Next.js", "Express.js"];
const databaseItems = ["MongoDB", "MariaDB"];
const otherItems = ["Git", "Docker", "Webpack", "Bash"];
const interestedInItems = ["Rust", "React Native", "Vite", "Qwik", "Java / C#"];

const TechnologiesSection = () => {
    return (
        <section id={SECTION_ID.technologies}>
            <H2>Technologies</H2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <Box heading="Languages" items={languageItems} />
                <Box heading="Frontend frameworks" items={frontendItems} />
                <Box heading="Backend frameworks" items={backendItems} />
                <Box heading="Databases" items={databaseItems} />
                <Box heading="Other" items={otherItems} />
                <Box heading="Interested in" items={interestedInItems} />
            </div>
        </section>
    );
};

export default TechnologiesSection;
