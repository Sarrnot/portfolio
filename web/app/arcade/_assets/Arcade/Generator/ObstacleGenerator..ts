import { GRAVITY_ACCELERATION } from "../Engine/PhysicsEngine";
import { JUMP_VELOCITY } from "../Engine/PlayerController";
import Obstacle from "../Entity/Obstacle";
import GameObjectRepository from "../Repository/GameObjectRepository";
import ImageRepository from "../Repository/ImageRepository";
import BASELINE_Y from "../constants/BASELINE_Y";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";
import VELOCITY from "../constants/VELOCITY";

const MIN_DISTANCE_RATIO = 1.05;
const CHANCE_TO_GENERATE = 1 / (TICKS_FREQUENCY * 1.2);
const SIZE = 50;
const SIZE_VARIATION = 15;
const jumpTickLength = (JUMP_VELOCITY / GRAVITY_ACCELERATION) * 2;

class ObstacleGenerator {
    private counter = 0;
    private images: HTMLImageElement[];

    constructor(
        private objectRepository: GameObjectRepository,
        imageRepository: ImageRepository
    ) {
        const { trunk, mushroom1, mushroom2, mushroom3, bush } =
            imageRepository.images;
        this.images = [trunk, mushroom1, mushroom2, mushroom3, bush];
    }

    generate = () => {
        this.counter++;

        if (this.counter < jumpTickLength * MIN_DISTANCE_RATIO) return;

        if (Math.random() > CHANCE_TO_GENERATE) return;

        this.counter = 0;

        const size = SIZE + Math.floor(Math.random() * SIZE_VARIATION);

        const obstacle = new Obstacle(
            { x: 1000 + size, y: BASELINE_Y },
            { x: size, y: size },
            { x: -VELOCITY, y: 0 },
            this.getRandomImage()
        );

        this.objectRepository.obstacles.push(obstacle);
    };

    private getRandomImage() {
        const index = Math.floor(Math.random() * this.images.length);
        return this.images[index];
    }
}

export default ObstacleGenerator;
