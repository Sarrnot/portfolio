import Ground from "../Entity/Ground";
import Landscape from "../Entity/Landscape";
import GameObjectRepository from "../Engine/GameObjectRepository";
import SCALE_FACTOR from "../constants/SCALE_FACTOR";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";
import VELOCITY from "../constants/VELOCITY";

const MIN_DISTANCE = SCALE_FACTOR.x / VELOCITY / 6;
const CHANCE_TO_GENERATE = 1 / TICKS_FREQUENCY;
const WIDTH = 40;
const HEIGHT = 40;

class LandscapeGenerator {
    private frontCounter = 0;
    private backCounter = 0;

    constructor(private objectRepository: GameObjectRepository) {
        objectRepository.landscapes.push(new Ground());
    }

    generate = () => {
        this.frontCounter++;
        this.backCounter++;

        if (
            this.frontCounter > MIN_DISTANCE &&
            Math.random() <= CHANCE_TO_GENERATE
        ) {
            this.frontCounter = 0;
            this.generateFront();
        }

        if (
            this.backCounter > MIN_DISTANCE &&
            Math.random() <= CHANCE_TO_GENERATE
        ) {
            this.backCounter = 0;
            this.generateBack();
        }
    };

    private generateFront() {
        const positionY = 30 + Math.round(Math.random() * 150);

        const landscape = new Landscape(
            { x: 1000 + WIDTH, y: positionY },
            { x: WIDTH, y: HEIGHT },
            { x: -VELOCITY, y: 0 }
        );

        this.objectRepository.landscapes.push(landscape);
    }

    private generateBack() {
        const landscape = new Landscape(
            { x: 1000 + WIDTH, y: 500 },
            { x: WIDTH / 2, y: HEIGHT / 2 },
            { x: -VELOCITY / 3, y: 0 },
            "#5F5E5E"
        );
        this.objectRepository.landscapes.push(landscape);
    }
}

export default LandscapeGenerator;
