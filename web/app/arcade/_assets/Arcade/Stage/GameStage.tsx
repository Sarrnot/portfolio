import { useEffect, useMemo, useRef } from "react";
import GameEngine from "../Engine/GameEngine";

const GameStage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const gameEngine = new GameEngine(canvasRef.current);
        // gameEngine.start();
    }, [canvasRef]);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default GameStage;
