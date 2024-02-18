import Text from "../Entity/Text";
import LandscapeGenerator from "../Generator/LandscapeGenerator";
import ObstacleGenerator from "../Generator/ObstacleGenerator.";
import GameObjectRepository from "../Repository/GameObjectRepository";
import { setStage } from "../Store/Data/stageSlice";
import { ArcadeStore } from "../Store/store";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";
import Canvas from "./Graphics/Canvas";
import GraphicsEngine from "./Graphics/GraphicsEngine";
import PhysicsEngine from "./PhysicsEngine";
import PlayerController from "./PlayerController";
import SCALE_FACTOR from "../constants/SCALE_FACTOR";
import EventDispatcher from "./EventDispatcher";
import CollisionEvent from "../Event/CollisionEvent";
import EventInterface from "../Event/EventInterface";
import Player from "../Entity/Player";
import Obstacle from "../Entity/Obstacle";
import ObjectDestroyedEvent from "../Event/ObjectDestroyedEvent";
import { incrementScore } from "../Store/Data/gameDataSlice";
import ImageRepository from "../Repository/ImageRepository";

class GameEngine {
    public tickInterval = 1_000 / TICKS_FREQUENCY;
    private gameOver = false;
    private tickCallbacks: Function[] = [];
    private interval?: NodeJS.Timeout;
    private graphicsEngine: GraphicsEngine;
    private objectRepository = new GameObjectRepository();
    private imageRepository = new ImageRepository();

    constructor(private store: ArcadeStore, canvas: Canvas) {
        const eventDispatcher = new EventDispatcher();
        const physicsEngine = new PhysicsEngine(
            this.objectRepository,
            eventDispatcher
        );
        this.graphicsEngine = new GraphicsEngine(this.objectRepository, canvas);
        new PlayerController(store, this.objectRepository);

        const obstacleGenerator = new ObstacleGenerator(
            this.objectRepository,
            this.imageRepository
        );
        const landscapeGenerator = new LandscapeGenerator(
            this.objectRepository,
            this.imageRepository
        );

        this.subscribeToTick(physicsEngine.update);
        this.subscribeToTick(obstacleGenerator.generate);
        this.subscribeToTick(landscapeGenerator.generate);

        eventDispatcher.addListener(
            CollisionEvent.name,
            this.playerCollisionListener
        );
        eventDispatcher.addListener(
            ObjectDestroyedEvent.name,
            this.scoreListener
        );
    }

    start() {
        this.graphicsEngine.start();
        this.tick();
        this.interval = setInterval(this.tick, this.tickInterval);
    }

    stop() {
        clearInterval(this.interval);
        this.graphicsEngine.stop();
    }

    private tick = () => {
        this.tickCallbacks.forEach((callback) => callback());
    };

    subscribeToTick(callback: Function) {
        this.tickCallbacks.push(callback);
    }

    private scoreListener = (event: EventInterface) => {
        if (this.gameOver) return;
        if (!(event instanceof ObjectDestroyedEvent)) return;
        if (!(event.object instanceof Obstacle)) return;

        this.store.dispatch(incrementScore());
    };

    private playerCollisionListener = (event: EventInterface) => {
        if (this.gameOver) return;
        if (!(event instanceof CollisionEvent)) return;

        const player = event.objects.find((object) => object instanceof Player);
        const obstacle = event.objects.find(
            (object) => object instanceof Obstacle
        );

        if (!player && !obstacle) return;

        this.gameOver = true;

        const text = new Text(
            { x: SCALE_FACTOR.x / 2, y: SCALE_FACTOR.y / 2 },
            "Game Over",
            48,
            0
        );

        const fadeIn = setInterval(() => {
            text.opacity += 0.005;
            if (text.opacity < 1) return;
            clearInterval(fadeIn);
        }, 5);

        this.objectRepository.other.push(text);

        setTimeout(() => {
            this.stop();
            this.store.dispatch(setStage("gameOver"));
        }, 3_000);
    };
}

export default GameEngine;
