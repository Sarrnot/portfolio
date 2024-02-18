import { useEffect, useRef } from "react";
import GameEngine from "../Engine/GameEngine";
import {
    useArcadeDispatch,
    useArcadeSelector,
    useArcadeStore,
} from "../Store/hooks";
import Canvas from "../Engine/Graphics/Canvas";
import { resetGameData } from "../Store/Data/gameDataSlice";

const GameStage = () => {
    const dispatch = useArcadeDispatch();
    const store = useArcadeStore();
    const score = useArcadeSelector((state) => state.gameData.score);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        dispatch(resetGameData());
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        const gameEngine = new GameEngine(store, new Canvas(canvasRef.current));
        gameEngine.start();
    }, [canvasRef.current]);

    return (
        <div className="h-full relative">
            <div className="absolute top-2 right-4 text-2xl">
                Score: {score}
            </div>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default GameStage;
