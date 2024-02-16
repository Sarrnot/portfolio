import { setStage } from "../Store/Data/stageSlice";
import { useArcadeDispatch } from "../Store/hooks";

const WelcomeStage = () => {
    const dispatch = useArcadeDispatch();

    const nextStage = () => {
        dispatch(setStage("newGame"));
    };

    return (
        <div
            className="flex flex-col justify-center items-center gap-6 w-full h-full"
            onClick={nextStage}
        >
            <div className="text-5xl font-bold">Arcade</div>
            <div>Click anywhere to start</div>
        </div>
    );
};

export default WelcomeStage;
