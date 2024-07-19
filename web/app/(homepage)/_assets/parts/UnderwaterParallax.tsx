import ParallaxContainer from "../components/Parallax/ParallaxContainer";
import Parallax from "../components/Parallax/Parallax";

const WaterLayer = (props: { transparent?: boolean }) => {
    const { transparent = true } = props;
    return (
        <div
            className={`absolute w-full h-full z-10 bg-[#6e65d9] ${
                transparent && "opacity-50"
            }`}
        />
    );
};

const UnderwaterParallax = () => {
    return (
        <ParallaxContainer
            height={1000}
            align="bottom"
            clip={false}
            topThreshold={400}
        >
            <WaterLayer transparent={false} />
            <Parallax name="underwater/reef_back" speed={50} />
            <Parallax name="underwater/fish_back" speed={50} />
            <WaterLayer />
            <Parallax name="underwater/reef_middle" speed={70} />
            <Parallax name="underwater/fish_middle" speed={70} />
            <WaterLayer />
            <Parallax name="underwater/reef_front" speed={100} />
            <Parallax name="underwater/fish_front" speed={90} />
        </ParallaxContainer>
    );
};

export default UnderwaterParallax;
