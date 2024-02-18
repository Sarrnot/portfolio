import { GRAVITY_ACCELERATION } from "../Engine/PhysicsEngine";
import { JUMP_VELOCITY } from "../Engine/PlayerController";
import Obstacle from "../Entity/Obstacle";
import GameObjectRepository from "../Engine/GameObjectRepository";
import BASELINE_Y from "../constants/BASELINE_Y";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";
import VELOCITY from "../constants/VELOCITY";

const MIN_DISTANCE_RATIO = 1.05;
const CHANCE_TO_GENERATE = 1 / (TICKS_FREQUENCY * 1.2);
const WIDTH = 40;
const HEIGHT = 40;
const jumpTickLength = (JUMP_VELOCITY / GRAVITY_ACCELERATION) * 2;

class ObstacleGenerator {
    private counter = 0;

    constructor(private objectRepository: GameObjectRepository) {}

    generate = () => {
        this.counter++;

        if (this.counter < jumpTickLength * MIN_DISTANCE_RATIO) return;

        if (Math.random() > CHANCE_TO_GENERATE) return;

        this.counter = 0;

        const obstacle = new Obstacle(
            { x: 1000 + WIDTH, y: BASELINE_Y },
            { x: WIDTH, y: HEIGHT },
            { x: -VELOCITY, y: 0 }
        );

        this.objectRepository.obstacles.push(obstacle);
    };
}

export default ObstacleGenerator;
