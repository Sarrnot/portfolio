import { setStage } from "../Store/Data/stageSlice";
import { useArcadeDispatch, useArcadeSelector } from "../Store/hooks";

const GameOverStage = () => {
    const dispatch = useArcadeDispatch();
    const score = useArcadeSelector((state) => state.gameData.score);

    return (
        <div
            className="flex flex-col justify-center items-center text-center gap-6 h-full"
            onClick={() => dispatch(setStage("newGame"))}
        >
            <div className="text-3xl">
                Your final score is: <span className="font-bold">{score}</span>
            </div>
            <div>Click anywhere to continue</div>
        </div>
    );
};

export default GameOverStage;
