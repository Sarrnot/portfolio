import { useArcadeSelector } from "../../Store/hooks";

const ScoreDisplay = () => {
    const score = useArcadeSelector((state) => state.gameData.score);

    return (
        <div className="absolute top-2 right-4 text-2xl">Score: {score}</div>
    );
};

export default ScoreDisplay;
