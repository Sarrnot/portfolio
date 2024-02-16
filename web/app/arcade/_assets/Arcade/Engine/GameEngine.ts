// import ObstacleGenerator from "../Generator/ObstacleGenerator.";
import GameObjectRepository from "../Repository/GameObjectRepository";
import GraphicsEngine from "./Graphics/GraphicsEngine";
// import PhysicsEngine from "./PhysicsEngine";

class GameEngine {
    public readonly tickInterval = 1 / 60;
    private callbackQueue: Function[] = [];
    private interval?: NodeJS.Timeout;

    constructor(canvas: HTMLCanvasElement) {
        const objectRepository = new GameObjectRepository();

        // const physicsEngine = new PhysicsEngine(objectRepository);
        const graphicsEngine = new GraphicsEngine(canvas, objectRepository);

        graphicsEngine.start();
        // const obstacleGenerator = new ObstacleGenerator();

        // this.subscribeToTick(physicsEngine.updatePositions);
        // this.subscribeToTick(obstacleGenerator.generate);
    }

    start() {
        this.interval = setInterval(this.tick, this.tickInterval);
    }

    stop() {
        clearInterval(this.interval);
    }

    private tick = () => {
        this.callbackQueue.forEach((callback) => callback());
    };

    subscribeToTick(callback: Function) {
        this.callbackQueue.push(callback);
    }
}

export default GameEngine;
