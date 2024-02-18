import { useEffect, useRef } from "react";
import GameEngine from "../Engine/GameEngine";
import { useArcadeDispatch, useArcadeStore } from "../Store/hooks";
import Canvas from "../Engine/Graphics/Canvas";
import { resetGameData } from "../Store/Data/gameDataSlice";
import ScoreDisplay from "./components/ScoreDisplay";

const GameStage = () => {
    const dispatch = useArcadeDispatch();
    const store = useArcadeStore();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        dispatch(resetGameData());
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        const gameEngine = new GameEngine(store, new Canvas(canvasRef.current));
        gameEngine.start();

        return () => {
            gameEngine.stop();
        };
    }, [canvasRef.current]);

    return (
        <div className="h-full relative">
            <ScoreDisplay />
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default GameStage;
