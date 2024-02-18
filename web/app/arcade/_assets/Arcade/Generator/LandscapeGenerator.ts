import Ground from "../Entity/Ground";
import Landscape from "../Entity/Landscape";
import GameObjectRepository from "../Repository/GameObjectRepository";
import ImageRepository from "../Repository/ImageRepository";
import BASELINE_Y from "../constants/BASELINE_Y";
import SCALE_FACTOR from "../constants/SCALE_FACTOR";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";
import VELOCITY from "../constants/VELOCITY";

const MIN_DISTANCE = SCALE_FACTOR.x / VELOCITY / 6;
const CHANCE_TO_GENERATE_FRONT = 1 / (TICKS_FREQUENCY * 0.8);
const CHANCE_TO_GENERATE_BACK = 1 / (TICKS_FREQUENCY * 0.5);
const SIZE = 45;
const SIZE_VARIATION = 15;
const HORIZON_Y = 480;

class LandscapeGenerator {
    private frontCounter = 0;
    private backCounter = 0;
    private frontImages: HTMLImageElement[];
    private backImages: HTMLImageElement[];

    constructor(
        private objectRepository: GameObjectRepository,
        imageRepository: ImageRepository
    ) {
        objectRepository.other.push(new Ground(BASELINE_Y, 3));
        objectRepository.other.push(
            new Ground(HORIZON_Y, 2, "rgba(0, 0, 0, 0.1)")
        );

        const { grass, rock, tree1, tree2, tree3, tree4 } =
            imageRepository.images;
        this.frontImages = [grass, rock];
        this.backImages = [tree1, tree2, tree3, tree4];
    }

    generate = () => {
        this.frontCounter++;
        this.backCounter++;

        if (
            this.frontCounter > MIN_DISTANCE &&
            Math.random() <= CHANCE_TO_GENERATE_FRONT
        ) {
            this.frontCounter = 0;
            this.generateFront();
        }

        if (
            this.backCounter > MIN_DISTANCE &&
            Math.random() <= CHANCE_TO_GENERATE_BACK
        ) {
            this.backCounter = 0;
            this.generateBack();
        }
    };

    private generateFront() {
        const positionY = 30 + Math.round(Math.random() * 150);
        const size = SIZE + Math.floor(Math.random() * SIZE_VARIATION);
        const imageIndex = Math.floor(Math.random() * this.frontImages.length);

        const landscape = new Landscape(
            { x: 1000 + SIZE, y: positionY },
            { x: size, y: size },
            { x: -VELOCITY, y: 0 },
            this.frontImages[imageIndex]
        );

        this.objectRepository.landscapes.push(landscape);
    }

    private generateBack() {
        const size = SIZE / 1.8 + Math.floor(Math.random() * SIZE_VARIATION);
        const imageIndex = Math.floor(Math.random() * this.backImages.length);

        const landscape = new Landscape(
            { x: 1000 + SIZE, y: HORIZON_Y },
            { x: size, y: size },
            { x: -VELOCITY / 3, y: 0 },
            this.backImages[imageIndex],
            0.3
        );
        this.objectRepository.landscapes.push(landscape);
    }
}

export default LandscapeGenerator;
