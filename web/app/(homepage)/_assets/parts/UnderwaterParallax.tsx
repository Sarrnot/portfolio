import ParallaxContainerOffset from "../components/ParallaxContainerOffset";
import ParallaxOffset from "../components/ParallaxOffset";

const UnderwaterParallax = () => {
    return (
        <ParallaxContainerOffset>
            <ParallaxOffset name="underwater/water_bg" speed={100} />
            <ParallaxOffset name="underwater/reef_back" speed={50} />
            <ParallaxOffset name="underwater/fish_back" speed={50} />
            <ParallaxOffset name="underwater/water_layer" speed={100} />
            <ParallaxOffset name="underwater/reef_middle" speed={70} />
            <ParallaxOffset name="underwater/fish_middle" speed={70} />
            <ParallaxOffset name="underwater/water_layer" speed={100} />
            <ParallaxOffset name="underwater/reef_front" speed={100} />
            <ParallaxOffset name="underwater/fish_front" speed={90} />
        </ParallaxContainerOffset>
    );
};

export default UnderwaterParallax;
